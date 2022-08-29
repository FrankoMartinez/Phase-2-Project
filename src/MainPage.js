import React, { useState, useEffect } from "react";
import Tasks from "./Tasks";

function MainPage({}) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/users')
    .then((r) => r.json())
    .then((data) => setTasks(data))
}, [])

    return (
        <>
            <h1>Tasks</h1>
            <Tasks tasks={tasks} />
        </>
    )
}

export default MainPage;