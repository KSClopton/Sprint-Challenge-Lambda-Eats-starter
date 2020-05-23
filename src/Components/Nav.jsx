import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Link, Route,} from 'react-router-dom';


function Nav(props) {

    return (
       <StyleNav>
           <h3>Papa Jan's</h3>
           <ul className='nav-items'>
               <Link className='link' to='/Home' style={{ textDecoration: 'none' }}>
               <li>Home</li>
               </Link>
               <Link className='link' to='/YourOrder' style={{ textDecoration: 'none' }}>
               <li>Your Order</li>
               </Link>
               <li>About</li>
           </ul>
        </StyleNav>
    )
}
const StyleNav = styled.nav`
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    color: black;

    .nav-items{
        display: flex;
        color: black;
        justify-content: space-evenly;
        width: 40%;
        list-style:none;
    }
    .link {
        color: black;
    }
`
export default Nav;