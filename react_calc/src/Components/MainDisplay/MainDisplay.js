// Imports
import React from 'react';
import './MainDisplay.css'; // 'MainDisplay' Stylesheet

// Create <MainDisplay /> ['React'(Component)]
class MainDisplay extends React.Component {
  render(){
    return (
      <div className="flex-row" id="display">{this.props.mainDisplay}</div>
    );
  }
}

// Exports
export default MainDisplay; // Export <MainDisplay />
