import { styled } from "styled-components";


export const StyledDashboard = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
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

export const StyledIndGame = styled.div`

`

export const StyledRenderedGames = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-y: auto;
  width: 400px;
  max-height: 600px;
`

export const StyledButton = styled.button`
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    color: #171e29;
  }

  &:hover {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }

  &:active {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }

  @media (min-width: 768px) {
    min-width: 170px;
  }
`;