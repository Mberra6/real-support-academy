import { Component } from 'react';
import "./navbar.css";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import LoginBtn from '../LoginButton/LoginBtn';


class Navbar extends Component {
  state = {clicked: false};
  // make state of clicked true when icon is clicked
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){
  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Real Support Academy</h1>
      {/* make the navbar dynamic(suitable for small screen sizes) */}
      <div className='menu-icons' onClick={this.handleClick}>
        {/* make hamburger and close icons dynamic using states. 
        state is initialised using and if else to check if the icons are clicked*/}
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
      </div>
      {/* make class name dynamic to get nav menu after icon is clicked*/}
      <ul className={this.state.clicked ?
      "nav-menu active" : "nav-menu"}>
        {/* retrieve index number menu items using map */}
        {MenuItems.map((item, index) => {
          return(
            // list tag needs to target index number
            <li key={index}>
              {/* make links dynamic to = {} */}
              <Link className={item.cName} to={item.url}>
              {/* make nav links dynamic using {} */}                
               {item.title}
              </Link>
            </li>
          )
        })}
        <LoginBtn className='navbarBtn'/>
      </ul>

    </nav>
  );
}
}
export default Navbar;
