import React, { useState } from "react";
import "./styles/App.css";
import QuestionForm from "./components/QuestionForm";
import GeneratedQuestions from "./components/GeneratedQuestions";

function App() {
  const [questions, setQuestions] = useState([]);

  const handleGenerateQuestions = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setQuestions(data.questions || []);
    } catch (error) {
      alert("Error generating questions. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <h1>Question Paper Generator</h1>
      <QuestionForm onGenerate={handleGenerateQuestions} />
      {questions.length > 0 && <GeneratedQuestions questions={questions} />}
    </div>
  );
}

export default App;