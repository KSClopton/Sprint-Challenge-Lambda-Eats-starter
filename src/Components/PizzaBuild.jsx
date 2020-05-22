import React from 'react';
import styled from 'styled-components'
import BuildYourOwn from '../Images/BuildYourOwn.jpg'

function PizzaBuild(props) {
    const {pizzaOrder, updatePizzaOrder, updateCheckBox, disabled, errors, onSubmit} = props;

    return (
    <form className='form container' onSubmit={onSubmit}>
       <div>
           <StyleHeading>
               <h2>Build Your Own Pizza</h2>
               <img src={BuildYourOwn}/>
            </StyleHeading>
            <h2>Build Your Own Pizza</h2>
            <div>
                <div>{errors.name}</div>
            </div>
            <label>Name
                <input 
                value={pizzaOrder.name}
                onChange={updatePizzaOrder}
                name='name'
                type='text'
                />
            </label>
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
            <label>Special Instructions
            <input 
            value={pizzaOrder.specinst}
            onChange={updatePizzaOrder}
            name='specinst'
            type='text'
                />
            </label>

            <button disabled={disabled}>Add to order</button>
       </div> 
       </form>
    )
}

const StyleHeading = styled.div`
    border: solid 2px red;
    display: flex;
    justify-content: column;
    text-align: center;

    img{
        height:300px;
        width: 100%;
    }

`
export default PizzaBuild;