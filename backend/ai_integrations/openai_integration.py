import openai

openai.api_key = "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"

def fetch_questions_openai(subject, topic, difficulty, question_type, num_questions):
    prompt = f"Generate {num_questions} {difficulty}-difficulty {question_type} questions on {topic} ({subject})."
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )
    return response['choices'][0]['message']['content'].split('\n')