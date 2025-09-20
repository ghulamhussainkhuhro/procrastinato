# backend/tests/test_llm_client.py

from app.services.llm_client import call_llm

def test_call_llm():
    messages = [
        {"role": "system", "content": "You are a test bot."},
        {"role": "user", "content": "Say hello in a funny way."}
    ]

    try:
        response = call_llm(messages)
        print("✅ LLM Response:", response)
    except Exception as e:
        print("❌ Error:", e)

if __name__ == "__main__":
    test_call_llm()
