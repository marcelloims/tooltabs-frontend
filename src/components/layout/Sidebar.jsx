import React, { useEffect, useState } from "react";
import Axios from "../../api/Axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    const [counter, setCounter] = useState(1);
    const [menus, setMenus] = useState([]);
    const [menus1, setMenus1] = useState([]);
    const [menus2, setMenus2] = useState([]);
    const [submenus, setSubmenus] = useState([]);
    const [expand, setExpand] = useState(false);

    const changeMenu = () => {
        if (counter === 1) {
            setCounter(2);
        } else {
            setCounter(1);
        }
    };

    const getSubMenu = (menuId) => {
        if (!expand) {
            setExpand(true);
            let submenu = menus
                .filter((menu) => menu.submenu == menuId)
                .map((menu) => menu)
                .sort((a, b) => a.sequent - b.sequent);
            setSubmenus(submenu);
        } else {
            setExpand(false);
        }
    };

    useEffect(() => {
        // Get data menu from table menu
        async function getMenus() {
            // Filter menu by user login
            const sessionLocal = JSON.parse(
                localStorage.getItem("department_per_position_id")
            );

            const response = await Axios.get(`/menu/fetch/${sessionLocal}`);
            setMenus(
                response.data.response
                    .map((menu) => menu)
                    .sort((a, b) => a.sequent - b.sequent)
            );

            setMenus1(
                response.data.response
                    .filter((menu) => menu.sequent.substring(0, 1) === "1")
                    .map((menu) => menu)
                    .sort((a, b) => a.sequent - b.sequent)
            );

            setMenus2(
                response.data.response
                    .filter((menu) => menu.sequent.substring(0, 1) === "2")
                    .map((menu) => menu)
                    .sort((a, b) => a.sequent - b.sequent)
            );
        }
        getMenus();
    }, []);

    useEffect(() => {}, [
        setCounter,
        setMenus,
        setMenus1,
        setMenus2,
        setSubmenus,
        setExpand,
    ]);

    return (
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    {counter === 1 &&
                        menus1.map((menu, i) =>
                            menu.name === "Go to Configuration" ? (
                                <li key={i}>
                                    <Link
                                        className="ai-icon"
                                        aria-expanded="false"
                                        onClick={changeMenu}
                                    >
                                        <i
                                            className={menu.icon}
                                            style={{ color: "#0a2e3d" }}
                                        ></i>
                                        <span className="nav-text">
                                            {menu.name}
                                        </span>
                                    </Link>
                                </li>
                            ) : (
                                <li key={i}>
                                    <Link
                                        to={menu.url}
                                        className="ai-icon"
                                        aria-expanded="false"
                                    >
                                        <i
                                            className={menu.icon}
                                            style={{ color: "#0a2e3d" }}
                                        ></i>
                                        <span className="nav-text">
                                            {menu.name}
                                        </span>
                                    </Link>
                                </li>
                            )
                        )}

                    {counter === 2 &&
                        menus2.map((menu, i) =>
                            menu.name === "Back to Main" ? (
                                <li key={i}>
                                    <Link
                                        className="ai-icon"
                                        aria-expanded="false"
                                        onClick={changeMenu}
                                    >
                                        <i
                                            className={menu.icon}
                                            style={{ color: "#0a2e3d" }}
                                        ></i>
                                        <span className="nav-text">
                                            {menu.name}
                                        </span>
                                    </Link>
                                </li>
                            ) : (
                                !menu.submenu &&
                                submenus.id === menu.submenus && (
                                    <li
                                        key={i}
                                        className={expand ? "mm-active" : ""}
                                    >
                                        <Link
                                            className={
                                                expand
                                                    ? "has-arrow ai-icon"
                                                    : "has-arrow ai-icon"
                                            }
                                            aria-expanded={
                                                expand ? "true" : "false"
                                            }
                                            onClick={() => getSubMenu(menu.id)}
                                        >
                                            <FontAwesomeIcon
                                                icon={menu.icon}
                                                style={{ color: "#0a2e3d" }}
                                            />

                                            <span className="nav-text">
                                                {menu.name}
                                            </span>
                                        </Link>
                                        {expand && (
                                            <ul
                                                aria-expanded="false"
                                                className="mm-collapse mm-show"
                                            >
                                                {submenus.map((submenu, i) => (
                                                    <li key={i}>
                                                        <Link to={submenu.url}>
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    submenu.icon
                                                                }
                                                                className="mr-2"
                                                                style={{
                                                                    color: "#0a2e3d",
                                                                }}
                                                            />
                                                            {submenu.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                )
                            )
                        )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
