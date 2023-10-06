import React, {useState} from 'react';
import styled from 'styled-components';

import SignUp from '../components/signUp';
import UserLogin from '../components/userLogIn';


 function Login({}) {
  const [current, setCurrent] = useState('login')

  const toggle = () => {
    current === 'login' ? setCurrent('register') : setCurrent('login')
  }
  return (
  <>
  {current === 'login' ?  <UserLogin toggle={toggle}/> : <SignUp toggle={toggle}/>}
  </>
  );
}

export default Login;