import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import "./Chatbot.css";

function App() {
    return (
        <div className="App">
            <h1>Question Paper Generator</h1>
            <ChatWindow />
        </div>
    );
}

export default App;