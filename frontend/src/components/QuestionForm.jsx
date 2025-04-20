import React, { useState } from "react";
import "./QuestionForm.css";

function QuestionForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
    difficulty: "Medium",
    questionType: "MCQ",
    numQuestions: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="topic"
        placeholder="Topic"
        value={formData.topic}
        onChange={handleChange}
        required
      />
      <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <select name="questionType" value={formData.questionType} onChange={handleChange}>
        <option value="MCQ">MCQ</option>
        <option value="Descriptive">Descriptive</option>
        <option value="True/False">True/False</option>
      </select>
      <input
        type="number"
        name="numQuestions"
        placeholder="Number of Questions"
        value={formData.numQuestions}
        onChange={handleChange}
        min="1"
        required
      />
      <button type="submit">Generate Questions</button>
    </form>
  );
}

export default QuestionForm;