import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>Coder BnB</h1>
    <NavbarContainer />
    {children}
  </div>
);

export default App;
