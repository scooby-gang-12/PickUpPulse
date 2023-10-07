import React, {useState} from 'react';
<<<<<<< HEAD
=======
import styled from 'styled-components';

>>>>>>> JC/ReactRouterPages
import SignUp from '../components/signUp';
import UserLogin from '../components/userLogin';


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