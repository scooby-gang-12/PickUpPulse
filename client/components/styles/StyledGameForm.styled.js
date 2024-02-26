import styled from "styled-components";

export const StyledGameForm = styled.form`
  background-color: ${({ theme }) => theme.colors.loginForm};
//   box-shadow: -15px 15px 20px black;
  opacity: 0.95;
  border-radius: 40px;
  padding: 40px;
  margin: 20px auto;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & #gameName {
    width: 400px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px;
  }

  & #partySize {
    width: 60px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  & #dropdown-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  & #address {
    width: 400px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`