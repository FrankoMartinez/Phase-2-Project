import React from "react";

function Task({tasks}) {
    //Map through tasks
    const tasksDisplayed = tasks.map((task) => {
        return (
            <div key={task.id}>
                <h3>{task.task}</h3>
                <input 
                type="checkbox"
                value={task.comple}
                >
                </input>
            </div>
        )
    })
    console.log(tasksDisplayed)

    //Functionality of button when clicked add task
    function addTask() {
        const form = {
            id : "",
            task: "",
            completed: ""
        }
        fetch("http://localhost:3004/Tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
        .then(response => response.json())
        .then(data => data)
    }

    //Styling
    const ulStyling = {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#90ee90"
    }

    const liStyling = {
        textTransform: "uppercase",
        fontWeight: "bold",
        paddingBottom: 5,
        position: "center",
        textAlign: "center",
        float: "left", 
        padding: 5,
        fontSize: 20
    }

    return (
        <>
            <input
            type="text"
            placeholder="Add task"
            >
            </input>
            <button type="Submit">Add Task</button>
            <ul style={ulStyling}>
                <li style={liStyling}>All</li>
                <li style={liStyling}>Pending</li>
                <li style={liStyling}>Completed</li>
            </ul>
            {tasksDisplayed}
        </>
    )
}

export default Task;