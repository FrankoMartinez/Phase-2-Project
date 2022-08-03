import React, { useState } from "react";
import MainPage from "./MainPage";
import { Form } from "react-bootstrap";

function Login() {
    const [submitted, setSubmitted] = useState(false);
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    function handleOnChange(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }

    function submitForm(e) {
        e.preventDefault();
        if (username === "") {
            setSubmitted(false)
        } else {
            setSubmitted(true)
        }
        setError("Please enter a username")
    }

    return (
        <div>
            <h1>Simple To-Do List</h1>
                <h3>Please Create an Account!</h3>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Please provide a username..." 
                            value={username} 
                            onChange={handleOnChange}
                            />
                            {submitted && username != "" ? <MainPage /> : error}
                        </Form.Group>
                <button>Submit</button>
            </Form>
        </div>
    )
}

export default Login;