//Imports
import Data from '../Data/Data'; // 'Data' Object
import Memory from '../Memory/Memory'; // 'Memory'

const Evaluate =  {
  evaulate(value) {
    switch (value){
      case 'MC': //Memory-Clear
        Memory.clearMemory();
        Data.clearDisplay();
        break;
      case 'MR': //Memory-Recall
        document.getElementById('display').innerHTML = Memory.firstTerm;
        break;
      case 'M+': //Memory-Add
        Memory.memoryMath('+');
        Data.clearDisplay();
        break;
      case 'M-': //Memory-Subtract
        Memory.memoryMath('-');
        Data.clearDisplay();
        break;
      case 'MS': //Memory-Store
        Memory.memoryHistory();
        Memory.toggleMemory(false);
        Data.clearDisplay();
        break;
      case 'memory-history': //Memory-History
        console.log(Memory.history);
        console.log(memory);
        break;
      case '%':  //Percent
        Data.higherOperation('/100');
        break;
      case 'root': //Square-Root
        Data.higherOperation('Math.sqrt');
        break;
      case 'squared': //Squared
        Data.higherOperation('**2');
        break;
      case '1/x': //Reciprocal
        Data.higherOperation('1/');
        break;
      case 'CE': //Clear-Entry
        Data.clearDisplay();
        break;
      case 'C': //Clear-All
        Data.clearData();
        Memory.clearMemory();
        Data.clearDisplay();
        Data.clearSecondaryDisplay();
        break;
      case 'backspace': //Backspace
        const input = document.getElementById('display').innerHTML;
        Data.clearDisplay();
        Data.displayValue(input.slice(0, -1));
        break;
      case 'divide': //Divide
        Data.basicOperation('/');
        break;
      case 'multiply': //Multiply
        Data.basicOperation('*');
        break;
      case 'minus': //Subtract
        Data.basicOperation('-');
        break;
      case 'add': //Add
        Data.basicOperation('+');
        break;
      case '=': //Evaluate
        Data.basicOperation('=');
        break;
      case '.': //Decimal-Point
        const value = document.getElementById('display').innerHTML;
        if (!value.includes('.')) {
          Data.displayValue(this.innerHTML);
        };
        break;
      case 'negate': //Plus-Minus (Negate)
        Data.higherOperation('0-');
        break;
    }
  }
}
