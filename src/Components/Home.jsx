import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Veggies from '../Images/Veggies.jpg'
import MeatLovers from '..Images/MeatLovers.jpg'
import Hawaiian from '../Images/Hawaiian.jpg'


function Home() {

    return (
       <div>
           <BuildYourOwn>
            <Link to='/BuildYourOwn'>
                <h2>Build Your Own Pizza!</h2>
           </Link>
           </BuildYourOwn>
           
            <div className='pizza-container'>
                <img src={Veggies} height='100px' width='100px'/>
                <h4>Veggie</h4>
                <p>All the Veggies</p>
                <p>$12.00</p>
            </div>
            <div className='pizza-container'>
                <img src={MeatLovers}height='100px' width='100px'/>
                <h4>Meat Lovers</h4>
                <p>All the Meats!</p>
                <p>$13.50</p>
            </div>
            <div className='pizza-container'>
                <img src={Hawaiian} height='100px' width='100px'/>
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