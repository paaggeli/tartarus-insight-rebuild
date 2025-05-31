import { useState, useRef } from "react";
import { useChat } from "~/oracle/useChat";
import ChatInput from "~/oracle/chat-input";
import MessageList from "~/oracle/message-list";
import SettingsBar from "~/oracle/settings-bar";
import SettingsModal from "~/oracle/settings-modal";

export default function OraclePage() {
    const [showModal, setShowModal] = useState(false);
    const messageContainerRef = useRef<HTMLDivElement>(null);
    const [selectedApi, setSelectedApi] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [settings, setSettings] = useState({
        ollamaUrl: 'http://localhost:11434',
        openaiKey: '',
        claudeKey: ''
    });

    // Chat functionality
    const { 
        message, 
        setMessage, 
        chatMessages, 
        handleSend, 
        resizeTextarea 
    } = useChat({
        selectedApi, 
        selectedModel, 
        settings,
        messageContainerRef
    });

    // Update settings from modal
    const updateApiSettings = (newSettings: {
        ollamaUrl: string;
        openaiKey: string;
        claudeKey: string;
    }) => {
        setSettings(newSettings);
    };

    return (
        <section className="about px-[5px] py-[35px] text-center">
        <h1 className="text-3xl font-bold mb-4">Whisper Your Woes</h1>

        <div className="mx-auto mb-5 text-container">
            <p>The Oracle thrives on the struggles of entrepreneurs. Choose your words wisely!</p>
        </div>

        <div className="flex flex-col min-h-[300px] border border-gray-700 rounded-lg bg-white/5 shadow-md overflow-hidden mx-auto mb-5 text-container">
            {/* Settings Bar */}
            <SettingsBar 
                selectedApi={selectedApi}
                setSelectedApi={setSelectedApi}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                onSettingsClick={() => setShowModal(true)}
            />

            {/* Message List */}
            <MessageList 
                messages={chatMessages} 
                messageContainerRef={messageContainerRef} 
            />

            {/* Input */}
            <ChatInput
                message={message}
                setMessage={setMessage}
                handleSend={handleSend}
                resizeTextarea={resizeTextarea}
                disabled={!selectedModel}
            />
        </div>

        <p className="mt-4">
            <strong><u>*The Oracle is powered by AI. AI can make mistakes. Verify important information.*</u></strong>
        </p>

        <SettingsModal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)} 
            onSave={updateApiSettings}
            initialSettings={settings}
        />
        </section>
    );
}