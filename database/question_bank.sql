CREATE TABLE question_bank (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(255) NOT NULL,
    topic VARCHAR(255) NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    question_type VARCHAR(50) NOT NULL,
    question TEXT NOT NULL,
    source VARCHAR(50) NOT NULL
);