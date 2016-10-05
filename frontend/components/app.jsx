import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div id="app">
    <NavbarContainer />
    <div>Hello World</div>
    {children}
  </div>
);

export default App;
