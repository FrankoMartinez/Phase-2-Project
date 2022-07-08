import React from "react";

function Message({messages}) {

    const messageDisplayed = messages.map((message) => {
        return (
            <div key={message.id}>
                <h1>{message.title}</h1>
                <h2>{message.name}</h2>
            </div>
        )
    })

    return (
        <div>
            {messageDisplayed}
            <label>Message:</label>
            <input
            type="text"
            required
            >
            </input>
        </div>
    )
}

export default Message;