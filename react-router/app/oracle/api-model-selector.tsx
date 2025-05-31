import { useEffect, useState } from 'react';

interface OllamaModel {
    name: string;
}

interface OllamaResponse {
    models: OllamaModel[];
}

interface Props {
    selectedApi: string;
    setSelectedApi: (api: string) => void;
    selectedModel: string;
    setSelectedModel: (model: string) => void;
}

export default function ApiModelSelector({
    selectedApi,
    setSelectedApi,
    selectedModel,
    setSelectedModel,
  }: Props) {
    const [models, setModels] = useState<string[]>([]);
    const [error, setError] = useState('');
    const [showModelSelect, setShowModelSelect] =useState(false);

    useEffect(() => {
        async function fetchModels() {
            if (selectedApi === 'ollama') {
                try {
                    const res = await fetch('http://localhost:11434/api/tags');
                    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                    const data: OllamaResponse = await res.json();
                    const modelNames = data.models.map((m) => m.name);
    
                    if (modelNames.length === 0) {
                        throw new Error('No models available. Download one from https://ollama.com/search?q=llama');
                    }
    
                    setModels(modelNames);
                    setSelectedModel(modelNames[0]);
                    setShowModelSelect(true);
                } catch (err) {
                    if (err instanceof Error) {
                        setError(`Error: ${err.message}. Make sure Ollama is running...`);
                    } else {
                        setError('An unknow error occurred.');
                    }
                    setShowModelSelect(false);
                }
            } else if (selectedApi === 'openai') {
                const openaiModels = ['gpt-4o-mini', 'gpt-4o'];
                setModels(openaiModels);
                setSelectedModel(openaiModels[0]);
                setShowModelSelect(true);
            } else if (selectedApi === 'claude') {
                const claudeModels = ['claude-3-5-haiku-20241022', 'claude-3-5-sonnet-20241022'];
                setModels(claudeModels);
                setSelectedModel(claudeModels[0]);
                setShowModelSelect(true);
            }
        }

        if (selectedApi) {
            fetchModels();
        }
    }, [selectedApi, setSelectedApi]);

    const handleBack = () => {
        setSelectedApi('');
        setSelectedModel('');
        setShowModelSelect(false);
        setError('');
    };

    return (
        <div className="flex items-center gap-2">
            {!showModelSelect ? (
                <select
                    value={selectedApi}
                    onChange={(e) => setSelectedApi(e.target.value)}
                    className="dropdown block px-2 py-1 text-white border border-white bg-transparent rounded"
                >
                    <option value="">Choose an API</option>
                    <option value="ollama">Ollama</option>
                    <option value="openai">OpenAI GPT</option>
                    <option value="claude">Anthropic Claude</option>
                </select>
            ) : (
                <div className="models-wrapper flex items-center gap-2">
                    <span className="cursor-pointer" onClick={handleBack}>←</span>
                    <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="dropdown bg-transparent text-white rounded px-2 py-1"
                    >
                        {models.map((model) => (
                        <option key={model} value={model}>{model}</option>
                        ))}
                    </select>
                </div>
            )}

            {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        </div>
    );
}