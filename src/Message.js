import React from "react";

function Message({message}) {
    const messageDisplayed = message.map((message) => {
        return (
            <h1>{message.title}</h1>
        )
    })
    return (
        <div>
            {messageDisplayed}
        </div>
    )
}

export default Message;