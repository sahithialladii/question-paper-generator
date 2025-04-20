import React, { useState } from "react";

function ChatWindow() {
    const [chat, setChat] = useState([]);
    const [userInput, setUserInput] = useState("");

    const sendMessage = async () => {
        const response = await fetch("http://localhost:5000/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                subject: "Math",
                topic: "Algebra",
                difficulty: "Medium",
                question_type: "MCQ",
                num_questions: 10,
                ai_models: ["OpenAI", "Gemini"],
            }),
        });
        const data = await response.json();
        setChat([...chat, { user: userInput, bot: data }]);
        setUserInput("");
    };

    return (
        <div className="chat-window">
            <div className="chat-log">
                {chat.map((message, index) => (
                    <div key={index}>
                        <b>User:</b> {message.user}
                        <br />
                        <b>Bot:</b> {message.bot.join("\n")}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask something..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatWindow;