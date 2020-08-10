import React from 'react';
import Control from './Control/Control';
import ControlPanelCSS from './ControlPanel.module.css';

const controlArr = [
  { ingredient: 'Salad', type: 'salad'},
  { ingredient: 'Bacon', type: 'bacon'},
  { ingredient: 'Cheese', type: 'cheese'},
  { ingredient: 'Meat', type: 'meat'},
];

const controlPanel = (props) => (
  <div className={ControlPanelCSS.ControlPanel}>
    <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
    {controlArr.map(el => {
      return (
        <Control 
          key={el.ingredient}
          ingredient={el.ingredient}
          addIngredient={() => props.addIngredient(el.type)}
          removeIngredient={() => props.removeIngredient(el.type)}
          disableLessBtn={props.disableLessBtn[el.type]}/>
      );
    })}
    <button 
      className={ControlPanelCSS.CheckoutButton}
      disabled={!props.readyToCheckout}
      onClick={props.checkOut}>
          CHECK OUT
    </button>
  </div>
);

export default controlPanel;