import styled from "styled-components";

export const StyledFooter = styled.footer`
    grid-area: footer;
    background-color: ${({ theme }) => theme.colors.footer};
    font-family: var(--secondary-font);
    font-size: 12px;
    color: ${({theme}) => theme.colors.darkText};
    display: flex;
    justify-content: center;
    align-items: center;
`