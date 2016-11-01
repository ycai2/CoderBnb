import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Home from './home/home';

const App = ({ children }) => {
  console.log(children);
  return (
    <div id="app">
      <header>
        <NavbarContainer />
      </header>
      {children}
    </div>
  )
};

export default App;
