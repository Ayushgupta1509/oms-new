import React from 'react';
import styled from 'styled-components';
import Icon from '../components/sidebar/Icon'
import { IconContext } from 'react-icons/lib';
import './maindashboard.css'
const Nav = styled.div`
  background: #1C4E80;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:white;
`;
const Navs = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <div>
           {/* <img style={{width:'3rem', marginLeft:"4rem"}} src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png"/> */}
          </div>
          <h4 className='line'>WELCOME TO NARMADA KSHIPRA MULTIPURPOSE PROJECT</h4>
          <div>
          <Icon/>
          </div>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Navs;

