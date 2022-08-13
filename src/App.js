import Login from "./Login";
import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:3004/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login users={users} />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;