import React from 'react';
import SideDrawerCSS from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxiliary';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = [SideDrawerCSS.SideDrawer, SideDrawerCSS.Close];
  if (props.display) {
    attachedClasses = [SideDrawerCSS.SideDrawer, SideDrawerCSS.Open];
  }

  return (
    <Aux>
      <Backdrop 
        show={props.display} 
        clicked={props.close}/>
      <div className={attachedClasses.join(' ')}>
        <div className={SideDrawerCSS.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
    
  );
};

export default sideDrawer;