// Imports
import React from 'react';
import './Keyboard.css'; // 'Keyboard' Stylesheet
import MemoryFunctions from '../MemoryFunctions/MemoryFunctions'; // <MemoryFunctions />
import ButtonList from '../../Util/ButtonList/ButtonList'; // 'ButtonList' Data Object

// Create <Keyboard /> ['React'(Component)]
class Keyboard extends React.Component {
  render(){
    return (
      <div id="keyboard" className="flex-column">
        <MemoryFunctions
          pFunc={this.props.pFunc}
          buttons={ButtonList.memory} />
        {
          ButtonList.keyboard.map( row => {
            return (
              <div className="row flex-row">
              {
                row.map( btn => {
                  return (
                    <Button
                        pFunc={this.props.pFunc}
                        btn={btn} />
                  );
                });
              }
              </div>
            );
          });
        }
      </div>
    );
  };
}

// Exports
export default Keyboard; // Export <Keyboard />
