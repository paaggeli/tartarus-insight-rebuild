'use client'

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSend: () => void;
  resizeTextarea: (textarea: HTMLTextAreaElement) => void;
  disabled: boolean;
}

export default function ChatInput({ 
  message, 
  setMessage, 
  handleSend, 
  resizeTextarea,
  disabled
}: ChatInputProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-700/50">
      <textarea
        rows={1}
        value={message}
        disabled={disabled}
        onChange={(e) => {
          setMessage(e.target.value);
          resizeTextarea(e.target);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        placeholder="Type your message..."
        className="scrollbar flex-1 bg-transparent text-white text-base px-2 py-2 resize-none focus:outline-none max-h-[12rem]"
      />
      <button
        onClick={handleSend}
        disabled={disabled || !message.trim()}
        className="text-white border border-white px-3 py-1 rounded-full hover:bg-gray-600 disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
}