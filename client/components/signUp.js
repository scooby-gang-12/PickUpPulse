import React from "react";
import { useDispatch, useSelector } from "react-redux";


const SignUp = ({toggle}) => {


  return (
    <>
    <h1>Sign up</h1>
    <form>
      <label htmlFor='username'><strong>Username</strong></label><br></br>
      <input type='text'></input><br></br>
      <label htmlFor='password'><strong>Password</strong></label><br></br>
      <input type='text'></input><br></br>
      <button type="submit" onClick={toggle}>Sign up</button>
    </form><span><button>submit</button></span>
    
  </>
  )
}

export default SignUp;