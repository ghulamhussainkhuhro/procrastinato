// frontend/src/components/RoastBubble.tsx
interface RoastBubbleProps {
  sender: "user" | "bot";
  text: string;
}

export default function RoastBubble({ sender, text }: RoastBubbleProps) {
  const isUser = sender === "user";
  return (
    <div
      className={`max-w-xs p-3 rounded-lg shadow-md my-2 ${
        isUser ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
      }`}
    >
      <p className="text-sm">{text}</p>
    </div>
  );
}
