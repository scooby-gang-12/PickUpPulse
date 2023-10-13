import { styled } from "styled-components";


export const StyledDashboard = styled.div`
display: grid;
grid-template-columns: repeat(2, 50%);
grid-column-gap: 10px;
justify-items: center;
text-align: center;
margin-top: 40px;
`

export const StyledLeftSide = styled.div`
display: grid;
grid-template-rows: repeat(2, 50%);
grid-row-gap: 10px;
justify-items: center;
text-align: center;
`

export const StyledAllGames = styled.div`
justify-content: center;
justify-items: center;
text-align: center;
`

export const StyledRenderedGames = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-y: auto;
  width: 300px;
  max-height: 300px;
`
