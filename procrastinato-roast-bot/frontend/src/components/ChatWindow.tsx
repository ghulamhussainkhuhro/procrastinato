import { useState } from "react";
import RoastBubble from "./RoastBubble";
import InputBox from "./InputBox";
import { sendMessage } from "../services/api";
import { motion } from "framer-motion";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (msg: string) => {
    if (!msg.trim()) return;

    const newMsg: Message = { sender: "user", text: msg };
    setMessages((prev) => [...prev, newMsg]);
    setLoading(true);

    try {
      const res = await sendMessage(msg);
      setMessages((prev) => [...prev, { sender: "bot", text: res.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Oops, backend error! Even procrastination has its limits.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div  id="chat-window"
      className="w-full max-w-md mx-auto flex flex-col rounded-2xl shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-black h-[80vh]">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 text-center">
        <h1 className="text-xl font-bold text-pink-400">🔥 Procrastinato</h1>
        <p className="text-gray-400 text-sm">
          The Roast Bot You Asked For (literally)
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-3">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <RoastBubble sender={m.sender} text={m.text} />
          </motion.div>
        ))}

        {loading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-pink-400 text-sm italic"
          >
            🔥 Cooking up a roast...
          </motion.p>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-700">
        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
}
