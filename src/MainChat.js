import React, { useEffect, useState } from "react";
import Messages from "./Messages";

function MainChat() {
    const [messages, setMessage] = useState("")

    useEffect(() => {
        fetch('http://localhost:4000/Messages')
        .then((r) => r.json())
        .then((data) => setMessage(data))
    }, [])

    console.log(messages)
    return (
        <div>
            <h1>Welcome to the Main Chat Room!</h1>
            <Messages messages={messages} />
        </div>
    )
}

export default MainChat;