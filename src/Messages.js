import React from "react";
import Message from "./Message";

function Messages({messages}) {
    return (
        <div>
            <Message messages={messages}/>
        </div>
    )
}

export default Messages