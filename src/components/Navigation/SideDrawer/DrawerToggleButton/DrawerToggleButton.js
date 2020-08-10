import React from 'react';
import DrawerToggleBtnCSS from './DrawerToggleButton.module.css';


const drawerToggleButton = (props) => (
  <div 
    className={DrawerToggleBtnCSS.DrawerToggle}
    onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
  </div>
);

export default drawerToggleButton;