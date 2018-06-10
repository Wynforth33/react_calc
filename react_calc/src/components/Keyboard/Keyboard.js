// Imports
import React from 'react';
import './Keyboard.css'; // 'Keyboard' Stylesheet
import MemoryFunctions from '../MemoryFunctions/MemoryFunctions'; // <MemoryFunctions />
import Button from '../Button/Button'; // <Button />
import ButtonList from '../../Util/ButtonList/ButtonList'; // 'ButtonList' Data Object

// Create <Keyboard /> ['React'(Component)]
class Keyboard extends React.Component {
  render(){
    let index=0;
    return (
      <div id="keyboard" className="flex-column">
        <MemoryFunctions
          onPress={this.props.onPress}
          buttons={ButtonList.memory} />
        {
          ButtonList.keyboard.map(row=>{
            index++;
            return (
              <div className="row flex-row" key={index}>
              {
                row.map(btn=>{
                  return <Button key={btn.key} onPress={this.props.onPress} btn={btn} />
                })
              }
              </div>
            )
          })
        }
      </div>
    );
  };
}

// Exports
export default Keyboard; // Export <Keyboard />
