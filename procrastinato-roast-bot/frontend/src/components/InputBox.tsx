// frontend/src/components/InputBox.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface InputBoxProps {
  onSend: (message: string) => void;
}

export default function InputBox({ onSend }: InputBoxProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 border-t bg-white"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Drop your excuse and face the flames..."
        className="flex-1 p-3 rounded-xl border border-gray-300 shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-pink-500
                   transition"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 
                   text-white px-4 py-2 rounded-xl shadow-md font-semibold 
                   hover:opacity-90 transition"
      >
        <Send size={18} />
        Roast Me
      </motion.button>
    </form>
  );
}
