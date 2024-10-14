import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";
import { useState } from "react";


export const Navbar = () => {
    const { isLoggedIn } = useAuth();

    const themes = ['modern-minimalist', 'dark-theme'];
    const [isDarkTheme, setIsDarkTheme] = useState(false);

const toggleTheme = () => {
    if (isDarkTheme) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('modern-minimalist');
    } else {
        document.body.classList.remove('modern-minimalist');
        document.body.classList.add('dark-theme');
    }
    setIsDarkTheme(!isDarkTheme);
};

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="/">SolveMinds</a>
                    </div>
                    <nav>
                        <ul>
                            <li><button id="themeToggle" onClick={toggleTheme}> {isDarkTheme ? <FaToggleOff /> : <FaToggleOn />}</button></li>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/service">Services</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {isLoggedIn ? (
                                <li><NavLink to="/logout">Logout</NavLink></li>
                            ) : (
                                <>
                                    <li><NavLink to="/register">Register</NavLink></li>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
