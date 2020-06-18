import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Veggies from '../Images/Veggies.jpg'
import Meatlovers from '../Images/Meatlovers.jpg'
import Hawaiian from '../Images/Hawaiian.jpg'
import BuildYourPizza from '../Images/BuildYourPizza.jpg'

function Home() {

    return (
       <MainDiv >
           <BuildYourOwn>
            <Link className='link' to='/BuildYourOwn' style={{ textDecoration: 'none' }}>
                <h2>Build Your Own Pizza!</h2>
           </Link>
           </BuildYourOwn>
           <PizzaContainer>
            <PizzaCard>
                <img src={Veggies}/>
                <PizzaDescription>
                    <h4>Veggie</h4>
                    <p>You'll love this veggie pizza. It's prepared with veggies that have never been frozen</p>
                    <button>$12.00</button>
                </PizzaDescription>
            </PizzaCard>
            <PizzaCard>
                <img src={Meatlovers}/>
                <PizzaDescription>
                    <h4>Meat Lovers</h4>
                    <p>This delicious pizza will have you coming back for more. We use local ingredients in all our pizzas!</p>
                    <button>$12.00</button>
                </PizzaDescription>
            </PizzaCard>
            <PizzaCard>
                <img src={Hawaiian}/>
                <PizzaDescription>
                    <h4>Hawaiian</h4>
                    <p>Who can say no to the sweet' n' salty combination that only our Hawaiian Pizza can bring?</p>
                    <button>$12.00</button>
                </PizzaDescription>
            </PizzaCard>
        </PizzaContainer>

       </MainDiv> 
    )
}
const MainDiv = styled.div`
   .link{
       color:white;
   }
`
const BuildYourOwn = styled.div`
    border: solid black 2px;
    background-image:url(${BuildYourPizza});
    background-size: 100% 100%;
    height: 300px;


    h2{
        color: whitesmoke;
        text-decoration: none;
        margin-top: 25%;
        text-align: center;
        
    }
`
const PizzaCard = styled.div`
    display: flex;
    border-radius: 5px;
    background-color: whitesmoke;
    justify-content: flex-start;
    width: 25%;
    margin: 2%;
    box-shadow: 0 0 15px 1px grey;


    img{
        border-radius: 5px;
        height: auto;
        width: 50%;
    }
    
`
const PizzaContainer = styled.div`
    display: flex;
    background-color: whitesmoke;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: space-evenly;

    
`
const PizzaDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 7%;

    h4{
        font-size: .75rem;
        justify-content: center;
    }
    p{
        font-size: .4rem;
        
    }
    button{
        background-color:green;
        color:white;
        border-radius: 3px;
        width: 75px;
        margin-bottom: 1%;
    }
    

`
export default Home;