import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Home() {

    return (
       <div>
           <BuildYourOwn>
            <Link to='/BuildYourOwn'>
                <h2>Build Your Own Pizza!</h2>
           </Link>
           </BuildYourOwn>
           
            <div className='pizza-container'>
                <img src='../src/images/Veggies' height='100px' width='100px'/>
                <h4>Veggie</h4>
                <p>All the Veggies</p>
                <p>$12.00</p>
            </div>
            <div className='pizza-container'>
                <img src='../Images/MeatLovers'height='100px' width='100px'/>
                <h4>Meat Lovers</h4>
                <p>All the Meats!</p>
                <p>$13.50</p>
            </div>
            <div className='pizza-container'>
                <img src='../Images/Hawaiian' height='100px' width='100px'/>
                <h4>Hawaiian</h4>
                <p>Pineapple and Canadian Bacon!</p>
                <p>$12.00</p>
            </div>

       </div> 
    )
}

const BuildYourOwn = styled.div`
    border: solid black 2px;
    background-image: url('src/Images/BuildYourOwn.jpg');
    background-size: cover;
    height: 300px;

    h2{
        color: black;
        text-decoration: none;
        
    }
`
export default Home;