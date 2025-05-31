'use client'
import { useState, useEffect, RefObject } from 'react';
import { fetchOracleResponse } from '@/app/utils/api';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface UseChatProps {
  selectedApi: string;
  selectedModel: string;
  settings: {
    ollamaUrl: string;
    openaiKey: string;
    claudeKey: string;
  };
  messageContainerRef: RefObject<HTMLDivElement | null>;
}

export function useChat({ 
  selectedApi, 
  selectedModel, 
  settings,
  messageContainerRef 
}: UseChatProps) {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [chatMessages, messageContainerRef]);

  function handleSend() {
    if (!message.trim()) return;
    const prompt = message.trim();
    setMessage('');
    setChatMessages((prev) => [...prev, { role: 'user', content: prompt }]);
    askOracle(prompt);
  }

  function resizeTextarea(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight || '24', 10);
    const maxHeight = lineHeight * 10;
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  }

  async function askOracle(prompt: string) {
    if (!selectedModel || !selectedApi) return;

    const apiType = selectedApi as 'ollama' | 'openai' | 'claude';
    const apiKey = apiType === 'openai' 
      ? settings.openaiKey 
      : apiType === 'claude' 
        ? settings.claudeKey 
        : '';

    // Check for API keys if needed
    if ((apiType === 'openai' && !apiKey) || (apiType === 'claude' && !apiKey)) {
      setChatMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: `**Error:** ${apiType.charAt(0).toUpperCase() + apiType.slice(1)} API key is required. Please set it in Settings.` 
        }
      ]);
      return;
    }

    let responseBuffer = '';
    const appendStream = (chunk: string) => {
      responseBuffer += chunk;
      setChatMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last?.role === 'assistant') {
          // Update existing assistant message
          updated[updated.length - 1] = { role: 'assistant', content: responseBuffer };
        } else {
          // Add new assistant message
          updated.push({ role: 'assistant', content: responseBuffer });
        }
        return updated;
      });
    };

    try {
      await fetchOracleResponse({
        prompt,
        model: selectedModel,
        apiType,
        apiKey,
        ollamaUrl: settings.ollamaUrl,
        onChunk: appendStream
      });
    } catch (err) {
      setChatMessages((prev) => [
        ...prev, 
        { 
          role: 'assistant', 
          content: `**Error:** Failed to fetch Oracle response. ${err instanceof Error ? err.message : ''}` 
        }
      ]);
      console.error(err);
    }
  }

  return {
    message,
    setMessage,
    chatMessages,
    handleSend,
    resizeTextarea
  };
}