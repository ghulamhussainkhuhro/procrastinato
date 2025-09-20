# backend/app/routes.py
from fastapi import APIRouter
from app.models.request_model import ChatRequest
from app.models.response_model import ChatResponse
from app.services.llm_client import ask_groq

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    reply = await ask_groq(request.message)
    return ChatResponse(reply=reply)

