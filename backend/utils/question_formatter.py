def format_question_paper(questions):
    formatted_questions = []
    for i, question in enumerate(questions, 1):
        formatted_questions.append(f"{i}. {question}")
    return formatted_questions