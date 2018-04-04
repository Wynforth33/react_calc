import React from 'react';
import Memory from '../Data/Memory';
import Data from '../Data/Data';

export class Evaluator extends React.component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentBtnValue = this.props.btnValue;
    if (Data.numbers.includes(currentBtnValue)) {
      data.numberButton(currentBtnValue);
    }

    switch (this.props.btnValue) {
      case 'MC': //Memory-Clear
        memory.clearMemory();
        data.clearDisplay();
        break;
      case 'MR': //Memory-Recall
        document.getElementById('display').innerHTML = memory.firstTerm;
        break;
      case 'M+': //Memory-Add
        memory.memoryMath('+');
        data.clearDisplay();
        break;
      case 'M-': //Memory-Subtract
        memory.memoryMath('-');
        data.clearDisplay();
        break;
      case 'MS': //Memory-Store
        memory.memoryHistory();
        memory.toggleMemory(false);
        data.clearDisplay();
        break;
      case 'memory-history': //Memory-History
        console.log(memory.history);
        console.log(memory);
        break;
      case '%':  //Percent
        data.higherOperation('/100');
        break;
      case 'root': //Square-Root
        data.higherOperation('Math.sqrt');
        break;
      case 'squared': //Squared
        data.higherOperation('**2');
        break;
      case '1/x': //Reciprocal
        data.higherOperation('1/');
        break;
      case 'CE': //Clear-Entry
        data.clearDisplay();
        break;
      case 'C': //Clear-All
        data.clearData();
        memory.clearMemory();
        data.clearDisplay();
        data.clearSecondaryDisplay();
        break;
      case 'backspace': //Backspace
        const input = document.getElementById('display').innerHTML;
        data.clearDisplay();
        data.displayValue(input.slice(0, -1));
        break;
      case 'divide': //Divide
        data.basicOperation('/');
        break;
      case 'multiply': //Multiply
        data.basicOperation('*');
        break;
      case 'minus': //Subtract
        data.basicOperation('-');
        break;
      case 'add': //Add
        data.basicOperation('+');
        break;
      case '=': //Evaluate
        data.basicOperation('=');
        break;
      case '.': //Decimal-Point
        const value = document.getElementById('display').innerHTML;
        if (!value.includes('.')) {
          data.displayValue(this.innerHTML);
        };
        break;
      case 'negate': //Plus-Minus (Negate)
        data.higherOperation('0-');
        break;
    }
    return (<div>
      <SecondaryDisplay />
      <MainDisplay />
      </div>
    )
  }
}
