# backend/app/models/response_model.py
from pydantic import BaseModel

class ChatResponse(BaseModel):
    reply: str
