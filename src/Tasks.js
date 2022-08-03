import React from "react";
import Task from "./Task";

function Tasks({tasks}) {
    return (
        <div>
            <Task tasks={tasks}/>
        </div>
    )
}

export default Tasks