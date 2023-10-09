import React from "react";
import styled from 'styled-components';

import { useSelector } from "react-redux";

export default function Dashboard() {
    const {userInfo} = useSelector((state)=>state.auth)
    
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {userInfo && userInfo.username}</p>
        </div>
    )
}