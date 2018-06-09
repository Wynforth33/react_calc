// Imports
import React from 'react';
import './Header.css'; // 'Header' Stylesheet
import Menu from '../Menu/Menu'; // <Menu />
import History from '../History/History'; // <History />

// Create <Header /> ['React'(Component)]
class Header extends React.Component {
  render() {
    return (
      <header className="flex-row">
        <nav className="flex-row">
          <Menu getMenu={this.props.getMenu} />
          <h1>Standard</h1>
        </nav>
        <History getHistory={this.props.getHistory} />
      </header>
    );
  }
}

// Exports
export default Header; // Export <Header />
