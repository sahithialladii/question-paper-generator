from ai_integrations.openai_integration import fetch_questions_openai
from ai_integrations.gemini_integration import fetch_questions_gemini
from ai_integrations.grok_integration import fetch_questions_grok
from utils.question_formatter import format_question_paper

def generate_question_paper(subject, topic, difficulty, question_type, num_questions, ai_models):
    questions = []
    
    if 'OpenAI' in ai_models:
        questions += fetch_questions_openai(subject, topic, difficulty, question_type, num_questions // len(ai_models))
    if 'Gemini' in ai_models:
        questions += fetch_questions_gemini(subject, topic, difficulty, question_type, num_questions // len(ai_models))
    if 'Grok' in ai_models:
        questions += fetch_questions_grok(subject, topic, difficulty, question_type, num_questions // len(ai_models))
    
    return format_question_paper(questions)