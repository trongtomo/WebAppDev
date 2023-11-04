import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4">
            <div className={`${styles.container} mx-auto px-4`}>
                <p className="text-center text-gray-400">
                    &copy; 2023 My Awesome Website
                </p>
            </div>
        </footer>
    );
};

export default Footer;