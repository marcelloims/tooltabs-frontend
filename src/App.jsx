import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Template from "./components/layout/Index";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main/dashboard" element={<Template />} />
            </Routes>
        </div>
    );
}

export default App;
