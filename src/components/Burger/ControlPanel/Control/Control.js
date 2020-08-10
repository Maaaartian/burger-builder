import React from 'react';
import ControlCSS from './Control.module.css';

const control = (props) => (
  <div className={ControlCSS.Control}>
    <div className={ControlCSS.IngredientLabel}>
      {props.ingredient}
    </div>
    <button 
      className={ControlCSS.Less}
      onClick={props.removeIngredient}
      disabled={props.disableLessBtn}>
        Less
    </button>
    <button 
      className={ControlCSS.More} 
      onClick={props.addIngredient}>
        More
    </button>
  </div>
);

export default control;