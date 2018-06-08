// Imports
import React from 'react';
import './Keyboard.css'; // 'Keyboard' Stylesheet
import MemoryFunctions from '../MemoryFunctions/MemoryFunctions'; // <MemoryFunctions />

// Create <Keyboard /> ['React'(Component)]
class Keyboard extends React.Component {
  render(){
    return (
      <div id="keyboard" class="flex-column">
        <MemoryFunctions />
        {
          .map(buttons => {
            return <Button />
          })
        }
    <!-- Row 1 -->
    <div class="row flex-row">
      <div>
        <button id="percent">%</button>
      </div>
      <div>
        <button id="squareroot" data-operator="root">&radic;</button>
      </div>
      <div>
        <button id="power" data-operator="squared">x&sup2;</button>
      </div>
      <div>
        <button id="reciprocal">1/x</button>
      </div>
    </div>
    <!-- Row 2 -->
    <div class="row flex-row">
      <div>
        <button id="clear-entry">CE</button>
      </div>
      <div>
        <button id="clear-all">C</button>
      </div>
      <div>
        <button id="backspace" data-operator="backspace">
          <img src="./resources/images/backspace.png">
        </button>
      </div>
      <div>
        <button class="basic" id="divide" data-operator="divide">&divide;</button>
      </div>
    </div>
    <!-- Row 3 -->
    <div class="row flex-row">
      <div>
        <button class="number" id="btn-7">7</button>
      </div>
      <div>
        <button class="number" id="btn-8">8</button>
      </div>
      <div>
        <button class="number" id="btn-9">9</button>
      </div>
      <div>
        <button class="basic" id="multiply" data-operator="multiply">&times;</button>
      </div>
    </div>
    <!-- Row 4 -->
    <div class="row flex-row">
      <div>
        <button class="number" id="btn-4">4</button>
      </div>
      <div>
        <button class="number" id="btn-5">5</button>
      </div>
      <div>
        <button class="number" id="btn-6">6</button>
      </div>
      <div>
        <button class="basic" id="minus" data-operator="minus">&minus;</button>
      </div>
    </div>
    <!-- Row 5 -->
    <div class="row flex-row">
      <div>
        <button class="number" id="btn-1">1</button>
      </div>
      <div>
        <button class="number" id="btn-2">2</button>
      </div>
      <div>
        <button class="number" id="btn-3">3</button>
      </div>
      <div>
        <button class="basic" id="add" data-operator="add">&plus;</button>
      </div>
    </div>
    <!-- Row 6 -->
    <div class="row flex-row">
      <div>
        <button class="basic" id="plus-minus" data-operator="negate">&plusmn;</button>
      </div>
      <div>
        <button class="number" id="btn-0">0</button>
      </div>
      <div>
        <button class="basic" id="decimal">.</button>
      </div>
      <div>
        <button class="basic" id="evaluate">=</button>
      </div>
    </div>
  </div>
    );
  }
}

// Exports
export default Keyboard; // Export <Keyboard />
