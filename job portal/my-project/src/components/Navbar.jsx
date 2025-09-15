import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const navItems = [
        { path: "/", title: "start a search" },
        { path: "/my-job", title: "my jobs" },
        { path: "/salary", title: "salary estimate" },
        { path: "/post-job", title: "post a job" },
    ];

    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <nav className="flex justify-between items-center py-6">
                <Link to="/" className="flex items-center gap-2 text-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none"
                    >
                        <circle
                            cx="12.0143"
                            cy="12.5143"
                            r="12.0143"
                            fill="#3575E2"
                            fillOpacity="0.4"
                        />
                        <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
                    </svg>
                    <span>JobPortal</span>
                </Link>
                {/* nav item for large devices */}
                <ul className="hidden md:flex gap-12">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-primary">
                            <NavLink
                                to={path}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {/* sign and login btn */}
                <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
                    <Link to="/login" className="py-2 px-5 border rounded">log in</Link>
                    <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign up</Link>
                </div>
                {/* mobile menu*/}
                <div className="md:hidden">
                    <button onClick={handleMenuToggle} aria-label="Open menu">
                        <FaBarsStaggered className="w-5 h-5 text-primary" />
                    </button>
                </div>
                {/* nav item for mobile*/}
                {isMenuOpen && (
                    <div className="absolute top-16 right-4 bg-black shadow-lg rounded p-4 md:hidden">
                        <ul>
                            {navItems.map(({ path, title }) => (
                                <li key={path} className="mb-2">
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                        onClick={handleMenuToggle}
                                    >
                                        {title}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <Link to="/login" onClick={handleMenuToggle}>log in</Link>
                            </li>
                            <li>
                                <Link to="/sign-up" onClick={handleMenuToggle}>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar