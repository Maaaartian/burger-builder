import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
      )
    })

  return (
    <Aux>
      <h3>Your Order:</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
      <Button
        btnType="Success"
        clicked={props.processCheckout}>
          Yes!
      </Button>
      <Button
        btnType="Danger"
        clicked={props.cancelCheckout}>
          Maybe Later..
      </Button>
    </Aux>
  )
};

export default orderSummary;