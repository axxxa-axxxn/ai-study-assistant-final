from google import genai
from flask import current_app


def get_ai_client():
    """
    Create and return the Gemini client using
    the API key stored in the application configuration.
    """

    api_key = current_app.config.get("GEMINI_API_KEY")

    if not api_key:
        raise ValueError("GEMINI_API_KEY is not configured.")

    return genai.Client(api_key=api_key)


def generate_ai_response(prompt):
    """
    Send a prompt to the Gemini model and return its response.
    """

    client = get_ai_client()

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=prompt
    )

    return response.text