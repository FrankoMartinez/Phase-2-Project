import React, { useState } from "react";
import MainChat from "./MainChat";
import { Form } from "react-bootstrap";

function Login() {
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    function handleOnChange(e) {
        e.preventDefault();
        setMessage(e.target.value);
    }

    function submitForm(e) {
        e.preventDefault();
        setSubmitted(submitted => submitted = true)
        setError("Please enter a username")
    }
    console.log(submitted)

    return (
        <div>
            <h1>Welcome to React Chat App!</h1>
                <h3>Please Create an Account!</h3>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Please provide a username..." 
                            value={message} 
                            onChange={handleOnChange}
                            />
                            {submitted && message != "" ? <MainChat /> : error}
                        </Form.Group>
                <button>Submit</button>
            </Form>
        </div>
    )
}

export default Login;