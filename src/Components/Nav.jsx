import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router, Link, Route,} from 'react-router-dom';


function Nav(props) {

    return (
       <StyleNav>
           <h3>Papa Jan's</h3>
           <ul className='nav-items'>
               <Link to='/Home'>
               <li>Home</li>
               </Link>
               <li>About</li>
               <li>Your Order</li>
           </ul>
        </StyleNav>
    )
}
const StyleNav = styled.nav`
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;

    .nav-items{
        display: flex;
        justify-content: space-evenly;
        width: 40%;
        list-style:none;
    }
`
export default Nav;