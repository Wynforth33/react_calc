// Imports
import React from 'react';
import './MainDisplay.css'; // 'MainDisplay' Stylesheet

// Create <MainDisplay /> ['React'(Component)]
class MainDisplay extends React.Component {
  render(){
    return (
      <div className="flex-row" id="display"></div>
    );
  }
}

// Exports
export default MainDisplay; // Export <MainDisplay />
