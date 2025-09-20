// frontend/src/App.tsx
import AboutSection from "./components/AboutSection";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* About Section at top */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <AboutSection />
      </section>

      {/* Chatbot Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <ChatWindow />
        <p className="text-xs text-gray-500 mt-4 text-center max-w-md">
          ⚠️ Disclaimer: Procrastinato is a light-hearted roast bot. It may say
          things that feel harsh or sarcastic. Please don’t take it personally —
          it’s all for fun!
        </p>
      </section>
    </div>
  );
}

export default App;
