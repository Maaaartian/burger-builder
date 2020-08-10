import React from 'react';
import PropTypes from 'prop-types';
import IngredientCSS from './Ingredient.module.css';

const ingredient = (props) => {
  let currIngredient = null;
  
  switch (props.type) {
    case ('bread-bottom'): 
      currIngredient = <div className={IngredientCSS.BreadBottom}></div>;
      break;
    case ('bread-top'):
      currIngredient = (
        <div className={IngredientCSS.BreadTop}>
          <div className={IngredientCSS.Seeds1}></div>
          <div className={IngredientCSS.Seeds2}></div>
        </div>
      );
      break;
    case ('meat'):
      currIngredient = <div className={IngredientCSS.Meat}></div>
      break;
    case ('cheese'):
      currIngredient = <div className={IngredientCSS.Cheese}></div>
      break;
    case ('salad'):
      currIngredient = <div className={IngredientCSS.Salad}></div>
      break;
    case ('bacon'):
      currIngredient = <div className={IngredientCSS.Bacon}></div>
      break;
    default:
      currIngredient = null;
  }

  return currIngredient;
};

ingredient.PropTypes = {
  type: PropTypes.string.isRequired
};

export default ingredient;