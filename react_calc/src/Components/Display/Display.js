// Imports
import React from 'react';
import './Display.css'; // 'Display' Stylesheet
import MainDisplay from '../MainDisplay/MainDisplay'; // <MainDisplay />
import SecondaryDisplay from '../SecondaryDisplay/SecondaryDisplay'; // <MainDisplay />

// Create <Display /> ['React'(Component)]
class Display extends React.Component {
  render(){
    return (
      <div className="flex-column display">
        <SecondaryDisplay secondaryDisplay={this.props.secondaryDisplay} />
        <MainDisplay mainDisplay={this.props.mainDisplay}  />
      </div>
    );
  }
}

// Exports
export default Display; // Export <Display />
