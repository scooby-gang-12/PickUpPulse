import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, loginUser } from "../../../features/auth/authSlice";


export default function Navbar() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <div>
            <h1>PickUpPulse</h1>
            {isLoggedIn && 
                <nav>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/manage'>Manage Games</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/' onClick={handleClick}>Logout</Link>
                </nav>
            }
            
        </div>
    )
}