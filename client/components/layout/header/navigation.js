import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <h1>PickUpPulse</h1>
            <nav>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/manage'>Manage Games</Link>
                <Link to='/profile'>Profile</Link>
            </nav>
        </div>
    )
}