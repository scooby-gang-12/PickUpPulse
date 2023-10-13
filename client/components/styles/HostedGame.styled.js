import styled from "styled-components";

//this styling is being imported into the ./games/HostedGame.js component NOT ../pages/HostedGame.js

export const HostedGameContainer = styled.div`
  display: grid;
  margin: 10px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  width: 75%;
  border: 5px dashed #ffaeaf;
  border-radius: 10px;
  justify-items: center;
`;

export const GameName = styled.p`
  font-size: 20px;
  font-family: var(--secondary-font);
  
`