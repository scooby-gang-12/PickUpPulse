import styled from "styled-components";

export const StyledHeader = styled.header`
    // grid-area: header;
    background-color: ${({ theme }) => theme.colors.header};
    color: ${({ theme }) => theme.colors.lightText}
`

