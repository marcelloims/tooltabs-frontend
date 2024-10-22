import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCircleChevronRight,
    faBuilding,
    faLandmark,
    faUserTie,
    faLock,
} from "@fortawesome/free-solid-svg-icons";
import Office from "./pages/office/Office";
import Navbar from "./components/layout/Navbar";
import { useEffect, useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

function App() {
    library.add(
        faCircleChevronRight,
        faBuilding,
        faLandmark,
        faUserTie,
        faLock
    );

    const navigate = useNavigate();
    const location = useLocation();

    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }

        let path = location.pathname.split("/");
        setPageTitle(path[2]);
    }, []);

    useEffect(() => {}, [pageTitle]);

    return (
        <div>
            <Navbar pageTitle={pageTitle} />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main/dashboard" element={<Dashboard />} />
                <Route path="/main/office" element={<Office />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
