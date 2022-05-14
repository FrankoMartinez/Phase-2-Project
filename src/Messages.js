import React from "react";
import Message from "./Message";

function Messages({message, setMessage}) {
    return (
        <div>
            <Message message={message}/>
            <label>Message:</label>
            <input 
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            required
            >
            </input>
        </div>
    )
}

export default Messages