import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import BurgerCSS from './Burger.module.css';

const burger = (props) => {
  let ingredientArr = Object.keys(props.ingredients)
    .map(ingKey => {
    // for each type of ingredient, reserve an array with enough space for all ingredients
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        // use the ingredient name + index to create a unique key
        return <Ingredient key={ingKey + i} type={ingKey} />
      });
    // arr: the accumulator of all previous ingredient arrays
    // el: the current ingredient array
    // the 2nd argument of the reduce func is the initial accumulator -- an empty array
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  // If there's no ingredient, return the text that asks the customer to add ingredients
  if (ingredientArr.length === 0) {
    ingredientArr = <p>Add your ingredients here!</p>;
  }

  return (
    <div className={BurgerCSS.Burger}>
      <Ingredient type="bread-top"></Ingredient>
      {ingredientArr}
      <Ingredient type="bread-bottom"></Ingredient>
    </div>
  );
}

export default burger;