import React, { useState } from 'react';

import styled from 'styled-components';
import { HomePage } from 'pages';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SubPage from './pages/SubPage';

const MenuStyle = styled.span`
  position: fixed;
  z-index: 10;
  left: 20px;
  top: 20px;
  color: #fff;
  font-weight: 800;
`;
const ActiveMenuStyle = styled.ul`
  position: fixed;
  z-index: 10;
  left: 20px;
  top: 60px;
  font-weight: 600;
  font-size: 20px;
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 10px;
  }
`;

const Nav = () => (
  <ActiveMenuStyle>
    <li>
      <Link to="/">Ride a Bike</Link>
    </li>
    <li>
      <Link to="/sub">Rabbit's World Tour</Link>
    </li>
  </ActiveMenuStyle>
);

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="App">
      {/*<HomePage/>*/}
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/sub" component={SubPage} />
          <header>
            <MenuStyle onClick={() => setActiveMenu(!activeMenu)}>{activeMenu ? 'CLOSE' : 'MENU'}</MenuStyle>
            {activeMenu && <Nav />}
          </header>
        </div>
      </Router>
    </div>
  );
}

export default App;
