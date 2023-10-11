import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.lightText};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 60px;
    margin: 10px;

    &:hover {
        opacity: 0.8;
        transform: scale(0.98)
    }
`