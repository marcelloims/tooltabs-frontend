import React, { useEffect, useState } from "react";

const Dashboard = () => {
    return (
        <div id="main-wrapper">
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <strong>Welcome!</strong>
                                </div>
                                <div className="card-body">Dashboard</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content End */}
        </div>
    );
};

export default Dashboard;
