import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import { Form } from "react-bootstrap";

function Login({users}) {
    const [submitted, setSubmitted] = useState(false);
    const [username2, setUsername2] = useState("")
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    // Function to type in the username input 
    function handleOnChange(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }

    // Filter through users and check if a user already exist in the users array
    function checkIfUserExists(e) {
        setUsername2(e.target.value)
        //check if users array contains a user that has the username provided
        // user filter method to check if users contains the username provided
        const user = users.filter((user) => {
            //if it does exist console.log("exists")
            if(user.name === username2){
                console.log(username2)
            //if it does not exist console.log("does not exists")
            } else {
                console.log("User does not exist!")
            }
        })
        console.log(user)
    }

    function submitForm(e) {
        e.preventDefault();
        const newUser = {
            "name": username,
            "tasks": [{
            }]
        }

        if (username === "") {
            setSubmitted(false)
        } else {
            fetch('http://localhost:3004/users', {
                method:"POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            setSubmitted(true)
        }
        setError("Please enter a username")
    }

    return (
        <div style={{backgroundColor: "cyan"}}>
            <h1>Simple To-Do List</h1>
            <Form>
                <Form.Label>Please Login if you have an existing account</Form.Label>
                <Form.Control
                type="form"
                placeholder="Enter username"
                value={username2}
                onChange={checkIfUserExists}
                >
                </Form.Control>
                <button>Login</button>
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