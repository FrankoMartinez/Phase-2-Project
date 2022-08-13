import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import { Form } from "react-bootstrap";

function Login({users}) {
    const [submitted, setSubmitted] = useState(false);
    const [username2, setUsername2] = useState("")
    const [username, setUsername] = useState(() => {
        const saved = localStorage.getItem("username");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [error, setError] = useState("");

    useEffect(() => {
        localStorage.setItem("username", JSON.stringify(username))
    }, [username])

    function handleOnChange(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }

    function checkIfUserExists(e) {
        //check if users array contains a user that has the username provided
        // user filter method to check if users contains the username provided
        const user = users.filter((user) => user.name === e.target.value)
        setUsername2(e.target.value)
        console.log(user)
        //if it does exist console.log("exists")
        //if it does not exist console.log("does not exists")
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
            <Form>
                <Form.Label>Please Login if you have an existing account</Form.Label>
                <input
                type="form"
                placeholder="Enter username"
                value={username2}
                onChange={checkIfUserExists}
                >
                </input>
            </Form>
                <h3>Please Create an Account!</h3>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control 
                            type="form" 
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