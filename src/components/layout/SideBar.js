import React, { Fragment } from 'react'
// import SldeBar from '../../styles/SideBar.css';
import { slide as Menu } from 'react-burger-menu';

class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default SideBar

// const SideBar = () => <Fragment>
//       <img src='https://github.githubassets.com/images/spinners/octocat-spinner-64.gif' alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
//       <p className="text-center">Start using to see some magic happen :)</p>
//     </Fragment>

// export default SideBar


// import React from 'react';
// import { slide as Menu } from 'react-burger-menu';
// import SldeBar from '../../styles/SldeBar.css';

// export default props => {
//   return (
//     <Menu>
//       <a className="menu-item" href="/">
//         Home
//       </a>
// {
//       // <a className="menu-item" href="/laravel">
//       //   Laravel
//       // </a>

//       // <a className="menu-item" href="/angular">
//       //   Angular
//       // </a>

//       // <a className="menu-item" href="/react">
//       //   React
//       // </a>

//       // <a className="menu-item" href="/vue">
//       //   Vue
//       // </a>
// }
//       <a className="menu-item" href="/about">
//         About
//       </a>
//     </Menu>
//   );
// };