import React from "react";
import Messages from "./Messages";

function MainChat({message, setMessage}) {
    return (
        <div>
            <h1>Welcome to the Chat Room!</h1>
            <Messages  message={message} setMessage={setMessage}/>
        </div>
    )
}

export default MainChat;