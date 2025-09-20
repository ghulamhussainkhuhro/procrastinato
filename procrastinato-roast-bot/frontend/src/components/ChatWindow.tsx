// frontend/src/components/ChatWindow.tsx
import { useState } from "react";
import RoastBubble from "./RoastBubble";
import InputBox from "./InputBox";
import { sendMessage } from "../services/api";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (msg: string) => {
    const newMsg: Message = { sender: "user", text: msg };
    setMessages((prev) => [...prev, newMsg]);
    setLoading(true);

    try {
      const res = await sendMessage(msg);
      setMessages((prev) => [...prev, { sender: "bot", text: res.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops, backend error!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto border rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        {messages.map((m, i) => (
          <RoastBubble key={i} sender={m.sender} text={m.text} />
        ))}
        {loading && (
          <p className="text-gray-500 text-sm italic">Bot is roasting...</p>
        )}
      </div>
      <InputBox onSend={handleSend} />
    </div>
  );
}
