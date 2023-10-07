import React from "react";
import styled from 'styled-components';



export default function SignUp({toggle}) {

  return (
    <LoginWrapper>
      <h1>Sign up</h1>
      <form>
        <label for='username'><strong>Username</strong></label><br></br>
        <input type='text'></input><br></br>
        <label for='password'><strong>Password</strong></label><br></br>
        <input type='text'></input><br></br>
        <button type="submit" onClick={toggle}>Sign up</button>
      </form>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormWrapper = styled.form `
  display: flex;
  justify-content: center;
`