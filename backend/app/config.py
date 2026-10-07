import os
from dotenv import load_dotenv


load_dotenv()


class Config:
    """
    Application configuration.
    """

    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "development-secret-key-change-this"
    )

    DEBUG = os.getenv(
        "FLASK_DEBUG",
        "True"
    ).lower() == "true"

    # Supabase PostgreSQL database
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT Authentication
    JWT_SECRET_KEY = os.getenv(
        "JWT_SECRET_KEY",
        SECRET_KEY
    )

    # Access token lifetime: 1 hour
    JWT_ACCESS_TOKEN_EXPIRES = 3600

    # Google Gemini / AI Studio
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")