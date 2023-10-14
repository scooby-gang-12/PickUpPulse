import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.loginForm};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  border-radius: 40px;
  padding: 20px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;

`