import React from 'react';
import styled from 'styled-components'
import BuildYourOwn from '../Images/BuildYourOwn.jpg'
import BuildCard from '../Images/BuildCard.jpg'


function PizzaBuild(props) {
    const {pizzaOrder, updatePizzaOrder, updateCheckBox, disabled, errors, onSubmit} = props;

    return (
    <form className='form container' onSubmit={onSubmit}>
       <MainContainer>
           <StyleHeading>
               <h2>Build Your Own Pizza</h2>
            </StyleHeading>
            <MainPic>
            <img src={BuildYourOwn}/>
            </MainPic>
            
            <h2>Build Your Own Pizza</h2>
            <div>
                <div>{errors.name}</div>
            </div>
            <PizzaCard>
            <img src={BuildCard}/>
            <h2>Enter your Name</h2>
            <label>Name
                <input 
                value={pizzaOrder.name}
                onChange={updatePizzaOrder}
                name='name'
                type='text'
                />
            </label>
            </PizzaCard>
            <PizzaCard>
            <img src={BuildCard}/>
            <h2>Choose a size</h2>
           <label>Choice of Size
           <select 
           value={pizzaOrder.size}
           onChange={updatePizzaOrder}
           name='size'
           >
               <option value=''>- Select an option -</option>
               <option value='Small'>Small </option>
               <option value='Medium'>Medium</option>
               <option value='Large'>Large</option>
           </select>
           </label>
           </PizzaCard>
           <PizzaCard>
           <img src={BuildCard}/>
           <h2>Choose one sauce</h2>
            {/* radio buttons */}
           <label>Tomato
            <input 
            type='radio'
            name='sauce'
            value='Tomato'
            onChange={updatePizzaOrder}
            />
           </label>
           <label>BBQ
            <input 
            type='radio'
            name='sauce'
            value='BBQ'
            onChange={updatePizzaOrder}
            />
           </label>
           <label>Buffalo
            <input 
            type='radio'
            name='sauce'
            value='Buffalo'
            onChange={updatePizzaOrder}
            />
           </label>
           </PizzaCard>
           <PizzaCard>
           <img src={BuildCard}/>
           <h2>Choose up to four toppings!</h2>
           <label>Pepperoni
            <input
            type='checkbox'
            name='pepperoni'
            checked={pizzaOrder.toppings.pepperoni}
            onChange={updateCheckBox}
                />
           </label>
           <label>Sausage
            <input
            type='checkbox'
            name='sausage'
            checked={pizzaOrder.toppings.sausage}
            onChange={updateCheckBox}
                />
           </label>
           <label>Pineapple
            <input
            type='checkbox'
            name='pineapple'
            checked={pizzaOrder.toppings.pineapple}
            onChange={updateCheckBox}
                />
           </label>
           <label>Onion
            <input
            type='checkbox'
            name='onion'
            checked={pizzaOrder.toppings.onion}
            onChange={updateCheckBox}
                />
            </label>
            </PizzaCard>
            <label>Special Instructions
            <input 
            value={pizzaOrder.specinst}
            onChange={updatePizzaOrder}
            name='specinst'
            type='text'
                />
            </label>

            <button disabled={disabled}>Add to order</button>
       </MainContainer> 
       </form>
    )
}
const MainContainer = styled.div`
    h2{
        background-color: lightgrey;
    }
`
const PizzaCard = styled.div`
    display: flex;
    border-radius: 5px;
    background-color: whitesmoke;
    justify-content: flex-start;
    width: 50%;
    margin: 2%;
    box-shadow: 0 0 15px 1px grey;
    

    img{
        border-radius: 5px;
        height: auto;
        width: 50%;
    }

`
const StyleHeading = styled.div`
    border: solid 2px red;
    display: flex;
    justify-content: column;
    text-align: center;

 
`
const MainPic = styled.div`
    

    img{
        max-width: 100%;
    }
`

export default PizzaBuild;