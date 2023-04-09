import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <nav className=' bg-[#F4F4F4]'>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#757575]">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/statistics" className="justify-between">Statistics</NavLink></li>
                                <li><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                            </ul>
                        </div>
                        <Link to="/" className="cursor-pointer normal-case text-xl"><img src="../../public/Logo.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#757575]">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/statistics">Statistics</NavLink></li>
                            <li><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link className="btn bg-color-gradient">Start Applying</Link>
                    </div>
                </div>
            </nav>
    );
};

export default Header;