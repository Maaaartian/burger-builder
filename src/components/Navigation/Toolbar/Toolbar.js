import React from 'react';
import ToolbarCSS from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton';

const toolbar = (props) => (
  <header className={ToolbarCSS.Toolbar}>
    <DrawerToggleButton 
      clicked={props.drawerToggle}/>
    <div className={ToolbarCSS.Logo}>
      <Logo />
    </div>
    <nav className={ToolbarCSS.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;