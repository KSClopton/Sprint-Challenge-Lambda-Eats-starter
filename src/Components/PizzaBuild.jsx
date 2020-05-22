import React from 'react';
import styled from 'styled-components'

function PizzaBuild(props) {
    const {onInputChange, values, disabled, onSubmit, errors} = props;

    return (
    <form className='form container' onSubmit={onSubmit}>
       <div>
           <StyleHeading>
               <h2>Build Your Own Pizza</h2>
               <img src='src/Images/BuildYourOwn.jpg'/>
            </StyleHeading>
            <h2>Build Your Own Pizza</h2>
            <div>
                <div>{errors.name}</div>
            </div>
            <label>Name
                <input name='name' onChange={onInputChange} type='text'/>
            </label>
           <label>Choice of Size
           <select 
           value={values.size}
           name='size'
           >
               <option value=''>- Select an option -</option>
               <option value='Small'>Small </option>
               <option value='Medium'>Medium</option>
               <option value='Large'>Large</option>
           </select>
           </label>

           <label>Tomato
            <input 
            type='radio'
            name='sauce'
            value='Tomato'
      
            />
           </label>
           <label>BBQ
            <input 
            type='radio'
            name='sauce'
            value='BBQ'
          
            />
           </label>
           <label>Buffalo
            <input 
            type='radio'
            name='sauce'
            value='Buffalo'
        
            />
           </label>
           <label>Pepperoni
                <input
                type='checkbox'
                name='pepperoni'
                checked={values.toppings.pepperoni}
            
                />
           </label>
           <label>Sausage
                <input
                type='checkbox'
                name='sausage'
                checked={values.toppings.sausage}
            
                />
           </label>
           <label>Pineapple
                <input
                type='checkbox'
                name='pineapple'
                checked={values.toppings.pineapple}
                onChange='onChange'
                />
           </label>
           <label>Onion
                <input
                type='checkbox'
                name='onion'
                checked={values.toppings.onion}
        
                />
                <label>Special Instructions
                    <input 
                    type='text'
                    name='specialinstructions'
            
                    value={values.specialinstructions}/>
                </label>
                <button disabled={disabled}>Add to order</button>
           </label>
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