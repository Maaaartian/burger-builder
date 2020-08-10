import React from 'react';
import ModelCSS from './Model.module.css';
import Aux from '../../../hoc/Auxiliary';

import Backdrop from '../Backdrop/Backdrop';

const model = (props) => (
  // updating the performance:
  // only re-render the order summary (which is wrapped by Modal) if it's displaying

  /* shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show;
  } */

  <Aux>
    <Backdrop show={props.show} clicked={props.modelClosed}/>
    <div 
      className={ModelCSS.Model}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Aux>
  
);

export default model;