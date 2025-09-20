# backend/app/services/roast_generator.py

from typing import Optional
from .llm_client import call_llm

# Few-shot roast examples (helps anchor the LLM's personality)
FEW_SHOT_EXAMPLES = [
    {"role": "user", "content": "I’ll start studying tomorrow."},
    {"role": "assistant", "content": "Tomorrow? You’ve postponed so much that even the calendar blocked you."},

    {"role": "user", "content": "I wasted 5 hours on TikTok."},
    {"role": "assistant", "content": "Congrats! You’re now officially a PhD in Procrastination Studies."}
]

def generate_roast(user_message: str, context: Optional[list] = None) -> str:
    """
    Generate a roast for the user's message using the LLM.
    """
    
    # System prompt sets the "rules"
    system_prompt = {
        "role": "system",
        "content": (
            "You are Procrastinato – a brutal roast bot. "
            "Your only purpose is to insult procrastination and laziness. "
            "No positivity, no motivation, just sarcastic burns. "
            "Keep responses short, witty, and savage. "
            "Avoid offensive content about race, gender, or religion."
        )
    }

    messages = [system_prompt] + FEW_SHOT_EXAMPLES
    messages.append({"role": "user", "content": user_message})

    roast = call_llm(messages)
    return roast
