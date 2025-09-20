// frontend/src/components/InputBox.tsx
import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="flex gap-2 p-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your excuse..."
        className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Roast Me
      </button>
    </form>
  );
}
