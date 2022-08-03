import React from "react";

function Task({tasks}) {
    const tasksDisplayed = tasks.map((task) => {
        return (
            <div key={task.id}>
                <h3>{task.task}</h3>
                <input 
                type="checkbox"
                >
                </input>
            </div>
        )
    })
    console.log(tasksDisplayed)

    const ulStyling = {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden"
    }

    const liStyling = {
        textTransform: "uppercase",
        fontWeight: "bold",
        paddingBottom: 5,
        position: "relative",
        textAlign: "center",
        float: "left", 
        padding: 5,
        fontSize: 20
    }

    return (
        <div>
            <ul style={ulStyling}>
                <li style={liStyling}>All</li>
                <li style={liStyling}>Pending</li>
                <li style={liStyling}>Completed</li>
            </ul>
            {tasksDisplayed}
            <button type="Submit">Add Task</button>
        </div>
    )
}

export default Task;