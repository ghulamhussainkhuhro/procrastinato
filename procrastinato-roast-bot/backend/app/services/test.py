# backend/app/services/test.py
import asyncio
from llm_client import ask_groq

async def run():
    reply = await ask_groq("Roast me for procrastinating.")
    print("Bot:", reply)

if __name__ == "__main__":
    asyncio.run(run())
