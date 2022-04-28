import React from "react";
import Message from "./Message";

function Messages({message, setMessage}) {
    function messageTyped(event) {
        setMessage(event.target.value)
    }
    return (
        <div>
            <Message message={message}/>
            <label>Message:</label>
            <input 
            onChange={messageTyped}
            type="text"
            value={message}
            required
            >
            </input>
        </div>
    )
}

export default Messages