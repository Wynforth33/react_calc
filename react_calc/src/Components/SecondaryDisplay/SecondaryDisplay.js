// Imports
import React from 'react';
import './SecondaryDisplay.css'; // 'SecondaryDisplay' Stylesheet

// Create <SecondaryDisplay /> ['React'(Component)]
class SecondaryDisplay extends React.Component {
  render(){
    return (
      <div className="flex-row" id="secondary-display">{this.props.secondaryDisplay}</div>
    );
  }
}

// Exports
export default SecondaryDisplay; // Export <SecondaryDisplay />
