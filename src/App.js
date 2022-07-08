import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import MainChat from "./MainChat";
import HomepPage from "./HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomepPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MainChat" element={<MainChat />} />
      </Routes>
    </div>
  );
}

export default App;