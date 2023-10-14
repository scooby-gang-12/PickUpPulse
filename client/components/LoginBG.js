import React from "react";
import BGVideo from "../assets/dunkinLogin.mp4";
import styled from "styled-components";

export default function VideoBG() {
    return (
        
        <StyledVideo autoPlay muted loop type="video/mp4">
            <source src={BGVideo} />
        </StyledVideo>
        
    )
}

const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(10px);
`
