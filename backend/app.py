from flask import Flask, request, jsonify
from question_generator import generate_question_paper

app = Flask(__name__)

@app.route('/')
def home():
    return 'Welcome to the Question Paper Generator!'
@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    subject = data.get('subject')
    topic = data.get('topic')
    difficulty = data.get('difficulty')
    question_type = data.get('question_type')
    num_questions = data.get('num_questions')
    ai_models = data.get('ai_models', ['OpenAI', 'Gemini', 'Grok'])

    question_paper = generate_question_paper(subject, topic, difficulty, question_type, num_questions, ai_models)
    return jsonify(question_paper)

if __name__ == '__main__':
    app.run(debug=True)