import { motion } from "framer-motion";

export default function AboutSection() {
  const scrollToChat = () => {
    const chatEl = document.getElementById("chat-window");
    if (chatEl) {
      chatEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Hi, I’m <span className="text-pink-500">Ghulam Hussain</span>
        </motion.h1>

        {/* About Me */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg leading-relaxed mb-6"
        >
          I’m an aspiring{" "}
          <span className="font-semibold text-indigo-500">AI Engineer</span>{" "}
          passionate about building{" "}
          <span className="font-semibold">LLM-powered agents</span>,{" "}
          <span className="font-semibold">RAG systems</span>, and{" "}
          <span className="font-semibold">ML pipelines</span>.  
          I love experimenting with AI to create tools that are both{" "}
          <span className="underline">practical</span> and{" "}
          <span className="underline">fun</span>.
        </motion.p>

        {/* Project Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-md italic mb-10"
        >
          This project —{" "}
          <span className="font-semibold text-pink-500">Procrastinato</span> —  
          is a sarcastic roast bot that shows my ability to design{" "}
          <span className="font-semibold">AI-driven apps</span> with a GenZ
          twist. Built with{" "}
          <span className="font-semibold">LLMs + React + Tailwind</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-4"
        >
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/ghulamhussainkhuhro"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            💼 Connect on LinkedIn
          </a>

          {/* Scroll Button */}
          <button
            onClick={scrollToChat}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
             Try the Roast Bot
          </button>
        </motion.div>
      </div>
    </section>
  );
}
