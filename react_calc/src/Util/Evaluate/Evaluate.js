//Imports
import Data from './Data/Data'; // 'Data' Object
import Memory from './Memory/Memory'; // 'Memory' Object

const Evaluate ={
  evaluate(val){
    let result;
    switch(val){
      // Memory Functions
      case 'MC': //Memory-Clear
        Memory.clearMemory();
        return { mainDisplay : '' };

      case 'MR': //Memory-Recall
        const memoryVal = Memory.firstTerm;
        return { mainDisplay : memoryVal };

      case 'M+': //Memory-Add
        Memory.memoryMath('+');
        return { mainDisplay : '' };

      case 'M-': //Memory-Subtract
        Memory.memoryMath('-');
        return { mainDisplay : '' };

      case 'MS': //Memory-Store
        Memory.memoryHistory();
        Memory.toggleMemory(false);
        return { mainDisplay : '' };

      case 'memory-history': //Memory-History
        console.log(Memory);
        alert(Memory.history);
        return {};

      // Keyboard Functions
      case '%':  //Percent
        result = Data.higherOperation('/100');
        return { mainDisplay: result };

      case 'root': //Square-Root
        result = Data.higherOperation('Math.sqrt');
        return { mainDisplay: result };

      case 'squared': //Squared
        result = Data.higherOperation('**2');
        return { mainDisplay : result };

      case '1/x': //Reciprocal
        result = Data.higherOperation('1/')
        return { mainDisplay: result };

      case 'CE': //Clear-Entry
        return { mainDisplay : '' };

      case 'C': //Clear-All
        Data.clearData();
        Memory.clearMemory();
        return {
          mainDisplay: '',
          secondaryDisplay: ''
        };

      case 'divide': //Divide
        result = Data.basicOperation('/')
        return result;

      case 'multiply': //Multiply
        result = Data.basicOperation('*')
        return result;

      case 'minus': //Subtract
        result = Data.basicOperation('-')
        return result;

      case 'add': //Add
        result = Data.basicOperation('+');
        return result;

      case 'negate': //Plus-Minus (Negate)
        result = Data.higherOperation('0-');
        return { mainDisplay: result };

      case '=': //Evaluate
        result = Data.basicOperation('=');
        return result;

      default :
        return result;
    }
  },

  getHistory(){
    return Data.history;
  }
}

//Exports
export default Evaluate; // 'Evaluate' Object
