import React, { useEffect } from "react";
import logoText from "../../assets/images/logo-tooltabs-text-2.png";
import logoCircle from "../../assets/images/logo-tooltabs-icon.png";
import Axios from "../../api/Axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = ({ pageTitle }) => {
    const navigate = useNavigate();

    const proceedLogout = async (event) => {
        event.preventDefault();

        await Axios.post("/auth/logout")
            .then((response) => {
                Swal.fire({
                    title: "Thank you so much for using the apps",
                    text: response.data.message,
                    icon: "success",
                }).then((result) => {
                    if (result.isConfirmed) {
                        localStorage.removeItem("token");
                        navigate("/login");
                        navigate(0);
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="nav-header">
                <a href="index.html" className="brand-logo">
                    <img className="logo-abbr" src={logoCircle} alt="" />
                    <img className="logo-compact" src={logoText} alt="" />
                    <img className="brand-title" src={logoText} alt="" />
                </a>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left">
                                <div className="dashboard_bar">
                                    {pageTitle.toUpperCase()}
                                </div>
                            </div>
                            <div
                                style={{
                                    width: "100%",
                                    backgroundColor: "#000000",
                                }}
                            ></div>
                            <ul className="navbar-nav header-right">
                                <ul className="navbar-nav header-right float right">
                                    <li className="nav-item dropdown header-profile">
                                        <a
                                            className="nav-link"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                        >
                                            <i
                                                className="fa fa-cog fa-2x"
                                                aria-hidden="true"
                                            ></i>
                                            <div className="header-info">
                                                <span className="text-black">
                                                    <strong>Username</strong>
                                                </span>
                                                <p className="fs-12 mb-0">
                                                    Email User
                                                </p>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a
                                                onClick={proceedLogout}
                                                className="dropdown-item ai-icon"
                                            >
                                                <svg
                                                    id="icon-logout"
                                                    className="text-danger"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                    <polyline points="16 17 21 12 16 7"></polyline>
                                                    <line
                                                        x1="21"
                                                        y1="12"
                                                        x2="9"
                                                        y2="12"
                                                    ></line>
                                                </svg>
                                                <span className="ml-2">
                                                    Logout{" "}
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
