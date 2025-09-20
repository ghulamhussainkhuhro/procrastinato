# 🤖 Procrastinato Roast Bot

A fullstack AI-powered chatbot that delivers **funny, personalized roasts** to procrastinators — because sometimes tough love works better than motivation 😅.  

This project was built as part of the **Buildables Fellowship** and submitted to our team lead [**Maam Momina**](https://github.com/momina02).  
It was one of the official **tasks assigned in the Buildables Fellowship** journey.

---

## 🎯 Project Goal
To design and deploy a **fullstack AI chatbot** that:
- Understands user prompts.
- Generates witty and context-aware roast replies.  
- Demonstrates **modern AI engineering practices** (few-shot prompting, guardrails, and RAG).

---

## 🧠 Techniques Used

- **Few-Shot Prompting** →  
  Instead of training a new model, we provided **carefully chosen examples of roast replies** in the prompt so the LLM learns the "tone and style".

- **Guardrails & Safety** →  
  Content filtering and checks are applied to make sure roasts remain **funny, safe, and non-toxic**.

- **RAG (Retrieval-Augmented Generation)** →  will be added soon
  Prepares the system to **fetch procrastination excuses or user-specific context** and roast accordingly.

- **Groq API Integration** →  
  Leveraging [Groq’s LPU-powered inference](https://groq.com/) for **ultra-fast LLM responses** instead of OpenAI/HuggingFace.  
  This gives low-latency, snappy roast replies in real time.

- **Frontend–Backend Integration** →  
  - **Backend**: [FastAPI](https://fastapi.tiangolo.com/) (Python) — roast generation API.  
  - **Frontend**: [React + Vite + Tailwind](https://vitejs.dev/) — chat interface.  
  - Connected via REST APIs.

---

## ⚙️ Tech Stack

### Backend
- Python 3.11+
- FastAPI
- Uvicorn
- Pydantic
- Groq API (LLM inference)
- Requests / HTTPX
- Pytest (for testing)

### Frontend
- React (Vite + TypeScript)
- Tailwind CSS
- Axios (API calls)

### Deployment
- Docker
- Vercel / Railway (configs ready)

---

## 📂 Project Structure

```

procrastinato-roast-bot/
│── backend/         # FastAPI backend
│   ├── app/
│   │   ├── main.py
│   │   ├── routes.py
│   │   ├── services/
│   │   └── models/
│   └── tests/
│── frontend/        # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   └── services/
│── deployment/      # Docker + hosting configs
│── README.md        # Documentation

````

---

## 🚀 Running Locally

### Backend
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
````

Visit → [http://127.0.0.1:8000](http://127.0.0.1:8000)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit → [http://localhost:5173](http://localhost:5173)


---

## 🧑‍🤝‍🧑 Team & Fellowship

* Built during **Buildables Fellowship** 🏗️.
* Guided by our team lead [**Maam Momina**](https://github.com/momina02).
* This project was part of the **assigned tasks** to practice **Chatbots**.

---

## 🛠 Current Status

* ✅ Tailwind + React frontend running
* ✅ FastAPI backend integrated with **Groq API**
* ✅ Basic roasting works with few-shot prompting
* 🔄 **Improving roasting efficiency** (funnier, more personalized roasts)
* 🔄 **Strengthening guardrails** for safe and responsible humor
* 🚀 **Deployment coming soon** (live demo planned)

---

## 🌟 Future Work

* Add memory (roast history per user).
* Integrate voice roasting (TTS + STT).
* Deploy with Docker Compose for one-click setup.
* Improve personalization with embeddings & RAG.

---

## 📜 License

MIT License — free to use and modify with attribution.

```

