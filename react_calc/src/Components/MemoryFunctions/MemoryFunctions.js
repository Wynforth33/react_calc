// Imports
import React from 'react';
import './MemoryFunctions.css'; // 'MemoryFunctions' Stylesheet
import Button from '../Button/Button'; // <Button />

// Create <MemoryFunctions /> ['React'(Component)]
class MemoryFunctions extends React.Component {
  render(){
    return(
      <div className="row flex-row" id="memory">
        {
          this.props.buttons.map( btn => {
            <div className="button">
              <Button
                pFunc={this.props.pFunc}
                btn={btn} />
            </div>
          })
        }
      </div>
    );
  }
}

// Exports
export default MemoryFunctions; // Export <MemoryFunctions />
