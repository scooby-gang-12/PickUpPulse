import React from "react";
import styled from 'styled-components';


const SignUp = ({toggle}) => {
  return (
    <>
    <h1>Sign up</h1>
    <form>
      <label for='username'><strong>Username</strong></label><br></br>
      <input type='text'></input><br></br>
      <label for='password'><strong>Password</strong></label><br></br>
      <input type='text'></input><br></br>
      <button type="submit" onClick={toggle}>Sign up</button>
    </form>
  </>
  )
}

export default SignUp;