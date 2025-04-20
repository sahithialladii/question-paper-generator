# Question Paper Generator

A chatbot-based system to generate question papers using multiple AI models like OpenAI, Gemini, and Grok.

## Features
- Multi-AI question generation
- PDF export
- Customizable question paper

## Installation
1. Install requirements: `pip install -r requirements.txt`
2. Start backend: `python backend/app.py`
3. Start frontend: `npm start` (from `frontend/` folder)

## API Usage
POST `/generate`
```json
{
    "subject": "Math",
    "topic": "Algebra",
    "difficulty": "Medium",
    "question_type": "MCQ",
    "num_questions": 10,
    "ai_models": ["OpenAI", "Gemini"]
}
```

## Frontend
React-based chatbot interface.