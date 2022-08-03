import React, { useState, useEffect } from "react";
import Tasks from "./Tasks";

function MainPage({}) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/tasks')
    .then((r) => r.json())
    .then((data) => setTasks(data))
}, [])

    return (
        <div>
            <h1>Tasks</h1>
            <Tasks tasks={tasks} />
        </div>
    )
}

export default MainPage;