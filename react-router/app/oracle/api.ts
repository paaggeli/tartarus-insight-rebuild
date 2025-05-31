import { getSystemPrompt } from 'app/oracle/prompts';

// Define message types for each API
type OllamaMessage = { role: string; content: string };
type OpenAIMessage = { role: string; content: string | { type: string; text: string }[] };
type ClaudeMessage = { role: string; content: string };

// Define system prompt types
type OllamaSystemPrompt = { role: string; content: string };
type OpenAISystemPrompt = { role: string; content: { type: string; text: string }[] };

interface FetchOracleResponseParams {
  prompt: string;
  model: string;
  apiType: 'ollama' | 'openai' | 'claude';
  apiKey: string;
  ollamaUrl: string;
  onChunk: (chunk: string) => void;
}

export async function fetchOracleResponse({
  prompt,
  model,
  apiType,
  apiKey,
  ollamaUrl,
  onChunk
}: FetchOracleResponseParams) {
  // Get the system prompt for the selected API
  const systemPrompt = getSystemPrompt(apiType);
  
  // Set up conversation based on API type
  const conversation = createConversation(prompt, apiType, systemPrompt);
  
  // Make the appropriate API call
  if (apiType === 'ollama') {
    return fetchOllamaResponse(ollamaUrl, model, conversation as OllamaMessage[], onChunk);
  } else if (apiType === 'openai') {
    return fetchOpenAIResponse(apiKey, model, conversation as OpenAIMessage[], onChunk);
  } else if (apiType === 'claude') {
    return fetchClaudeResponse(apiKey, model, systemPrompt as string, conversation as ClaudeMessage[], onChunk);
  }
}

// Helper function to create the appropriate conversation format for each API
function createConversation(
  prompt: string, 
  apiType: string, 
  systemPrompt: OllamaSystemPrompt | OpenAISystemPrompt | string
): OllamaMessage[] | OpenAIMessage[] | ClaudeMessage[] {
  if (apiType === 'ollama') {
    return [
      systemPrompt as OllamaSystemPrompt,
      { role: 'user', content: prompt }
    ];
  } else if (apiType === 'openai') {
    return [
      systemPrompt as OpenAISystemPrompt,
      { role: 'user', content: [{ type: 'text', text: prompt }] }
    ];
  } else if (apiType === 'claude') {
    return [{ role: 'user', content: prompt }];
  }
  
  return [];
}

// Fetch response from Ollama API
async function fetchOllamaResponse(
  ollamaUrl: string, 
  model: string, 
  conversation: OllamaMessage[], 
  onChunk: (chunk: string) => void
) {
  const response = await fetch(`${ollamaUrl}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages: conversation, stream: true }),
  });

  if (!response.body) throw new Error("No stream response");
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value);
    let boundary = buffer.indexOf('\n');
    while (boundary !== -1) {
      const chunk = buffer.slice(0, boundary).trim();
      buffer = buffer.slice(boundary + 1);
      try {
        const json = JSON.parse(chunk);
        if (json.message?.content) onChunk(json.message.content);
      } catch {}
      boundary = buffer.indexOf('\n');
    }
  }
}

// Fetch response from OpenAI API
async function fetchOpenAIResponse(
  apiKey: string, 
  model: string, 
  conversation: OpenAIMessage[], 
  onChunk: (chunk: string) => void
) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: conversation,
      stream: true,
    }),
  });

  if (!response.body) throw new Error("No stream response");
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value);
    let boundary = buffer.indexOf('\n');
    while (boundary !== -1) {
      const line = buffer.slice(0, boundary).trim();
      buffer = buffer.slice(boundary + 1);
      if (line.startsWith('data: ') && !line.includes('[DONE]')) {
        try {
          const data = JSON.parse(line.slice(6));
          const delta = data.choices[0].delta?.content || '';
          onChunk(delta);
        } catch (e) {
          console.error('Error parsing OpenAI response:', e);
        }
      }
      boundary = buffer.indexOf('\n');
    }
  }
}

// Fetch response from Claude API
async function fetchClaudeResponse(
  apiKey: string, 
  model: string, 
  systemPrompt: string, 
  conversation: ClaudeMessage[], 
  onChunk: (chunk: string) => void
) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'content-type': 'application/json',
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      system: systemPrompt,
      messages: conversation,
      stream: true,
      max_tokens: 1024,
    }),
  });

  if (!response.body) throw new Error("No stream response");
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value);
    let boundary = buffer.indexOf('\n');
    while (boundary !== -1) {
      const line = buffer.slice(0, boundary).trim();
      buffer = buffer.slice(boundary + 1);
      if (line.startsWith('data: ')) {
        try {
          const data = JSON.parse(line.slice(6));
          if (data.type === 'content_block_delta') {
            const delta = data.delta?.text || '';
            onChunk(delta);
          }
        } catch (e) {
          console.error('Error parsing Claude response:', e);
        }
      }
      boundary = buffer.indexOf('\n');
    }
  }
}