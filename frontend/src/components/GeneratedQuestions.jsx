import React from "react";
import "./GeneratedQuestions.css";

function GeneratedQuestions({ questions }) {
  return (
    <div className="generated-questions">
      <h2>Generated Questions</h2>
      <ol>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ol>
    </div>
  );
}

export default GeneratedQuestions;