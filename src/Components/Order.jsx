import React from 'react';

function Order(props) {
    const {order} = props
    console.log(order)
    return (
        
       <div>
           <h2>{order.name}</h2>
           <h2>{order.size}</h2>
           <h2>{order.sauce}</h2>
           <h2>{order.specinst}</h2>
       </div> 
    )
}
export default Order;