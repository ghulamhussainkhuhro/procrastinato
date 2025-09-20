# backend/app/models/request_model.py
from pydantic import BaseModel

class ChatRequest(BaseModel):
    message: str
