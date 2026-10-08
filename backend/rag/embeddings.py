import os
from dotenv import load_dotenv

from langchain_google_genai import GoogleGenerativeAIEmbeddings

from .config import GEMINI_EMBEDDING_MODEL


# Load environment variables from backend/.env
load_dotenv()


def get_embeddings():
    return GoogleGenerativeAIEmbeddings(
        model=GEMINI_EMBEDDING_MODEL,
        google_api_key=os.getenv("GEMINI_API_KEY"),
    )