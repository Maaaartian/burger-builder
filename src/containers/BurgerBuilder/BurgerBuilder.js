import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import ControlPanel from '../../components/Burger/ControlPanel/ControlPanel';
import Model from '../../components/UI/Model/Model';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
  salad: 0.59,
  cheese: 0.29,
  meat: 1.59,
  bacon: 0.69
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 6.15,
    readyToCheckout: false,
    checkingOut: false,
    orderSummaryLoaded: true,
    hasError: false
  }

  componentDidMount () {
    axios.get('https://burger-builder-d41d7.firebaseio.com/ingredients.json')
      .then(res => {
        this.setState(
          {ingredients: res.data}
        )
      })
      .catch(err => {
        this.setState(
          {hasError: true}
        )
      });
  }

  /* check if there's any ingredient so that the customer will be ready to check out */
  updateCheckoutState = (ingredients) => {
    const sumIngredient = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0)
    this.setState({readyToCheckout: sumIngredient > 0});
  }

  /* add ingredients */
  addIngredientHandler = (type) => {
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = this.state.ingredients[type] + 1;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice
    });
    this.updateCheckoutState(newIngredients);
  }

  /* remove ingredients */
  removeIngredientHandler = (type) => {
    // update only if there is any ingredient of the specific type
    if (this.state.ingredients[type] > 0) {
      const newIngredients = {...this.state.ingredients};
      newIngredients[type] = this.state.ingredients[type] - 1;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: newIngredients,
        totalPrice: newPrice
      });
      this.updateCheckoutState(newIngredients);
    }
  }

  /* checking out */
  checkoutHandler = () => {
    this.setState({checkingOut: true})
  }

  /* check =out cancelled */ 
  checkoutCancelledHandler = () => {
    this.setState({checkingOut: false})
  }

  /* checkout processed */ 
  checkoutProcessedHandler = () => {
    // loading the order summary
    this.setState({orderSummaryLoaded: false});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Dummy',
        address: {
          street: 'Test',
          zipCode: '00000',
          country: 'Test'
        },
        email: 'dummy@gmail.com'
      },
      deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
      .then(res => {
        this.setState({
          orderSummaryLoaded: true,
          checkingOut: false
        });
      })
      .catch(err => {
        this.setState({
          orderSummaryLoaded: true,
          checkingOut: false
        });
      });
  }

  render() {
    /* disable the "Less" button if there's no ingredient of that type */
    const disableInfo = {...this.state.ingredients};
    for (let ing in disableInfo) {
      disableInfo[ing] = disableInfo[ing] === 0;
    }

    let orderSummary = null; 
    let burger = this.state.hasError ?
      <p>Sorry. Burger Builder cannot be loaded. Please try again later!</p> :
      <Spinner />;

    /* show spinner at the burger/order summary area if there's no ingredient */ 
    if (this.state.ingredients) {
      burger = 
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <ControlPanel 
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disableLessBtn={disableInfo}
            totalPrice={this.state.totalPrice}
            readyToCheckout={this.state.readyToCheckout}
            checkOut={this.checkoutHandler}/>
        </Aux>;
      
      orderSummary = 
        <OrderSummary 
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients} 
          processCheckout={this.checkoutProcessedHandler}
          cancelCheckout={this.checkoutCancelledHandler}/>;
    }
    
    /* show spinner at the order summary area if order summary has not been fully loaded */
    if (this.state.orderSummaryLoaded === false) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Model 
          show={this.state.checkingOut}
          modelClosed={this.checkoutCancelledHandler}>
            {orderSummary}
        </Model>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);