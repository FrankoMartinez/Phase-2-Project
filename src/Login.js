import React, { useState } from "react";
import MainChat from "./MainChat";

function Login() {
    const [username, setUsername] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState("")

    function usernameChange(event) {
        event.preventDefault()
        setUsername(event.target.value)
    }

    function submitForm() {
        setSubmitted(submitted => submitted = true)
    }

    if (submitted === true) {
        return <MainChat username={username} message={message} setMessage={setMessage}/>
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <h1>Welcome to React Chat App!</h1>
                <h3>Please Create an Account!</h3>
                <label htmlFor="username">Username: </label>
                <input
                    type="textbox"
                    placeholder="Enter a username..."
                    onChange={usernameChange}
                    required
                >
                </input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;