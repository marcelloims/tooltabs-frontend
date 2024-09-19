import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {}, []);

    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <strong>Welcome!</strong>
                </div>
                <div className="card-body">Dashboard</div>
            </div>
        </div>
    );
};

export default Dashboard;
