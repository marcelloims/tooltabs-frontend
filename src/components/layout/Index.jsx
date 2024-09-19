import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "../../pages/dashboard/Dashboard";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Template = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [pageTitle, setPageTitle] = useState("");
    const [apiHeaders, setApiHeaders] = useState("");

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }

        let path = location.pathname.split("/");
        setPageTitle(path[2]);
    }, []);

    useEffect(() => {}, [pageTitle, apiHeaders]);

    return (
        <div id="main-wrapper">
            <Navbar pageTitle={pageTitle} apiHeaders={apiHeaders} />
            <Sidebar />
            {/* Content Start */}
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <Dashboard />
                    </div>
                </div>
            </div>
            {/* Content End */}
            <Footer />
        </div>
    );
};

export default Template;
