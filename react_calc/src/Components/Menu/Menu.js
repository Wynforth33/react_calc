// Imports
import React from 'react';
import './Menu.css'; // 'Menu' Stylesheet

// Create <Menu /> ['React'(Component)]
class Menu extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.getMenu();
  }

  render(){
    return (
      <nav className="flex-row">
        <div>
          <button id="menu" onClick={this.handleClick}>&equiv;</button>
          <div className="hidden">
          </div>
        </div>
      </nav>
    );
  }
}

// Exports
export default Menu; // Export <Menu />
