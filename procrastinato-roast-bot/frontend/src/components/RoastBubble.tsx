// frontend/src/components/RoastBubble.tsx
import { motion } from "framer-motion";

interface RoastBubbleProps {
  sender: "user" | "bot";
  text: string;
}

export default function RoastBubble({ sender, text }: RoastBubbleProps) {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`max-w-xs p-3 my-2 rounded-2xl shadow-md text-sm leading-relaxed
        ${isUser ? "self-end bg-gradient-to-br from-blue-500 to-indigo-600 text-white" 
                 : "self-start bg-gradient-to-br from-pink-500 to-red-500 text-white shadow-lg"} 
      `}
    >
      <p className="whitespace-pre-line">{text}</p>
    </motion.div>
  );
}
