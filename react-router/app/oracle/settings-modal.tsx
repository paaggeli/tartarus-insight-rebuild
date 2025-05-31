import { useState, useEffect } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSave?: (settings: {
        ollamaUrl: string;
        openaiKey: string;
        claudeKey: string;
    }) => void;
    initialSettings?: {
        ollamaUrl: string;
        openaiKey: string;
        claudeKey: string;
    };
}

export default function SettingsModal({ isOpen, onClose, onSave, initialSettings }: Props) {
    const [selectedApi, setSelectedApi] = useState<'ollama' | 'openai' | 'anthropic'>('ollama');
    const [ollamaUrl, setOllamaUrl] = useState(initialSettings?.ollamaUrl || 'http://localhost:11434');
    const [openaiKey, setOpenaiKey] = useState(initialSettings?.openaiKey || '');
    const [claudeKey, setClaudeKey] = useState(initialSettings?.claudeKey || '');
    
    // Update local state when initialSettings change
    useEffect(() => {
        if (initialSettings) {
        setOllamaUrl(initialSettings.ollamaUrl);
        setOpenaiKey(initialSettings.openaiKey);
        setClaudeKey(initialSettings.claudeKey);
        }
    }, [initialSettings]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;
    
    const handleSave = () => {
        // If onSave is provided, call it with the current settings
        if (onSave) {
          onSave({
            ollamaUrl,
            openaiKey,
            claudeKey,
          });
        }
        onClose();
    };
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-[#262626] rounded-md w-full max-w-2xl mx-4 overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-700 p-4 text-white">
                    <h2 className="text-lg font-semibold m-0">Settings</h2>
                    <button 
                        onClick={onClose} 
                        className="text-white text-xl cursor-pointer">
                            &times;
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 text-white space-y-4">
                {/* API Selector */}
                <div>
                    <label htmlFor="api-select" className="block mb-1">Choose API:</label>
                    <select
                    id="api-select"
                    value={selectedApi}
                    onChange={(e) => setSelectedApi(e.target.value as typeof selectedApi)}
                    className="w-full bg-[#171717] border border-white text-white px-2 py-1 rounded"
                    >
                    <option value="ollama">Ollama</option>
                    <option value="openai">OpenAI GPT</option>
                    <option value="anthropic">Anthropic Claude</option>
                    </select>
                </div>

                {/* API-specific Inputs */}
                {selectedApi === 'ollama' && (
                    <div>
                    <label htmlFor="ollama-url" className="block mb-1">Ollama API Connection:</label>
                    <input
                        id="ollama-url"
                        type="text"
                        value={ollamaUrl}
                        onChange={(e) => setOllamaUrl(e.target.value)}
                        className="w-full bg-[#171717] border border-white text-white px-2 py-1 rounded"
                    />
                    </div>
                )}

                {selectedApi === 'openai' && (
                    <div>
                    <label htmlFor="openai-api-key" className="block mb-1">OpenAI API Key:</label>
                    <input
                        id="openai-api-key"
                        type="text"
                        placeholder="Enter your OpenAI API key"
                        value={openaiKey}
                        onChange={(e) => setOpenaiKey(e.target.value)}
                        className="w-full bg-[#171717] border border-white text-white px-2 py-1 rounded"
                    />
                    </div>
                )}

                {selectedApi === 'anthropic' && (
                    <div>
                    <label htmlFor="claude-api-key" className="block mb-1">Claude API Key:</label>
                    <input
                        id="claude-api-key"
                        type="text"
                        placeholder="Enter your Claude API key"
                        value={claudeKey}
                        onChange={(e) => setClaudeKey(e.target.value)}
                        className="w-full bg-[#171717] border border-white text-white px-2 py-1 rounded"
                    />
                    </div>
                )}
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-2 p-4 border-t border-gray-700">
                <button
                    onClick={onClose}
                    className="text-white border border-white px-3 py-1 rounded-full hover:bg-gray-600"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="text-white border border-white px-3 py-1 rounded-full hover:bg-gray-600"
                >
                    Save
                </button>
                </div>
            </div>
        </div>
    );
}