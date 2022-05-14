import React, { useState, useEffect } from "react";
import MainChat from "./MainChat";
import { Form } from "react-bootstrap";

function Login() {
    const [username, setUsername] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/Messages')
        .then((r) => r.json())
        .then((data) => setMessage(data))
    }, [])

    console.log(message)

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
            <h1>Welcome to React Chat App!</h1>
                <h3>Please Create an Account!</h3>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" placeholder="Please provide a username..." />
                        </Form.Group>
                <button>Submit</button>
            </Form>
        </div>
    )
}

export default Login;