import { styled } from "styled-components";


export const StyledDashboard = styled.div`
display: grid;
grid-template-columns: repeat(2, 50%);
grid-column-gap: 10px;
justify-items: center;
text-align: center;
`

export const StyledLeftSide = styled.div`
display: grid;
grid-template-rows: repeat(2, 50%);
grid-row-gap: 10px;
justify-items: center;
text-align: center;
`