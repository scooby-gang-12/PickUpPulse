import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import '../public/images/loginBackground.jpg';
import '../public/fonts/Rough Battle.ttf';
import '../public/fonts/Cabin-Regular.ttf';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <StrictMode>
      <App/> 
    </StrictMode>
  </Provider>
 
)