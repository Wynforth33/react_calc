// Imports
import React from 'react';
import './Header.css'; // 'Header' Stylesheet
import Menu from '../Menu/Menu'; // <Menu />
import History from '../History/History'; // <History />

// Create <Header /> ['React'(Component)]
class Header extends React.Component {
  render() {
    return (
      <header class="flex-row">
        <Menu getMenu={this.props.getMenu} />
        <h1>Standard</h1>
        <History getHistory={this.props.getHistory} />
      </header>
    );
  }
}

// Exports
export default Header; // Export <Header />
