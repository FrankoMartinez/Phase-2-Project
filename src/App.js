import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;