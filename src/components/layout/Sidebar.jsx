import React from "react";

const Sidebar = () => {
    return (
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    <li>
                        <a
                            className="has-arrow ai-icon"
                            href="#"
                            aria-expanded="false"
                        >
                            <i className="flaticon-381-networking"></i>
                            <span className="nav-text">Menu</span>
                        </a>
                        <ul aria-expanded="false">
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
