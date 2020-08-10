import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import LayoutCSS from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({showSideDrawer: false});
  };

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar 
          drawerToggle={this.toggleSideDrawerHandler}/>
        <SideDrawer 
          display={this.state.showSideDrawer}
          close={this.closeSideDrawerHandler}/>
        <main className={LayoutCSS.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;