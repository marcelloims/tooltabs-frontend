import React from "react";
import { IconBrandInstagram } from "@tabler/icons-react";

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="copyright">
                <p>
                    Copyright © Developed by{" "}
                    <i className="instagram" target="_blank"></i>{" "}
                    <a href="https://www.instagram.com/marcell_ims">
                        @marcell_ims
                    </a>
                    <IconBrandInstagram />
                    2024
                </p>
            </div>
        </div>
    );
};

export default Footer;
