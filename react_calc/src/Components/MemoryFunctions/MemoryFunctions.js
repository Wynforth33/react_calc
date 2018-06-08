// Imports
import React from 'react';
import './MemoryFunctions.css'; // 'MemoryFunctions' Stylesheet

// Create <MemoryFunctions /> ['React'(Component)]
class MemoryFunctions extends React.Component {
  render(){
    return (
      <div className="row flex-row" id="memory">
        <div>
          <button class="not-in-use" id="memory-clear">MC</button>
        </div>
        <div>
          <button class="not-in-use" id="memory-recall" >MR</button>
        </div>
        <div>
          <button id="memory-add">M+</button>
        </div>
        <div>
          <button id="memory-subtract">M-</button>
        </div>
        <div>
          <button id="memory-store">MS</button>
        </div>
        <div>
          <button class="not-in-use" id="memory-history" data-operator="memory-history">M&blacktriangledown;</button>
        </div>
      </div>
    );
  }
}

// Exports
export default MemoryFunctions; // Export <MemoryFunctions />
