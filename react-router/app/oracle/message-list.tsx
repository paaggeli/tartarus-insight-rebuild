import { type RefObject } from 'react';
import markdownit from 'markdown-it';

const md = new markdownit();

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface MessageListProps {
    messages: Message[];
    messageContainerRef: RefObject<HTMLDivElement | null>;
}

export default function MessageList({ messages, messageContainerRef }: MessageListProps) {
    return (
        <div 
            ref={messageContainerRef} 
            className="flex-1 px-4 py-2 overflow-y-auto text-left space-y-3">
            {messages.map((msg, idx) => (
                <div
                key={idx}
                className={`py-1 px-2 rounded w-fit text-white ${
                    msg.role === 'user' ? 'bg-zinc-700' : ''
                }`}
                >
                <div className="[&>p]:!m-0" dangerouslySetInnerHTML={{ __html: md.render(msg.content) }} />
                </div>
            ))}
        </div>
    );
}