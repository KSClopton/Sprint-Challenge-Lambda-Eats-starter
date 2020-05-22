import React from 'react';
import styled from 'styled-components'

function PizzaBuild(props) {
    const {onInputChange, values, disabled, onSubmit} = props;

    return (
        <form className='form container' onSubmit={onSubmit}>
       <div>
           <StyleHeading>
               <h2>Build Your Own Pizza</h2>
               <img src='src/Images/BuildYourOwn.jpg'/>
            </StyleHeading>
            <h2>Build Your Own Pizza</h2>
           <label>Choice of Size
           <select 
           onChange={onInputChange}
        //    value={values.size}
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
            onChange={onInputChange}
            />
           </label>
           <label>BBQ
            <input 
            type='radio'
            name='sauce'
            value='BBQ'
            onChange={onInputChange}
            />
           </label>
           <label>Buffalo
            <input 
            type='radio'
            name='sauce'
            value='Buffalo'
            onChange={onInputChange}
            />
           </label>
           <label>Pepperoni
                <input
                type='checkbox'
                name='pepperoni'
                checked='{}'
                onChange={onInputChange}
                />
           </label>
           <label>Sausage
                <input
                type='checkbox'
                name='sausage'
                checked='{}'
                onChange={onInputChange}
                />
           </label>
           <label>Pineapple
                <input
                type='checkbox'
                name='pineapple'
                checked='{}'
                onChange={onInputChange}
                />
           </label>
           <label>Onion
                <input
                type='checkbox'
                name='onion'
                checked='{}'
                onChange={onInputChange}
                />
                <label>Special Instructions
                    <input 
                    type='text'
                    name='specialinstructions'
                    onChange={onInputChange}
                    value='{}'/>
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