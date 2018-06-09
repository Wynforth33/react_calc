//Imports
import Data from './Data/Data'; // 'Data' Object
import Memory from './Memory/Memory'; // 'Memory' Object

const Evaluate ={
  evaulate(val){
    switch(val){
      let response;
      // Memory Functions
      case 'MC': //Memory-Clear
        Memory.clearMemory();
        return response = {
          mainDisplay: ''
        };

      case 'MR': //Memory-Recall
        const memoryVal = Memory.firstTerm;
        return response = {
          mainDisplay: memoryVal
        };

      case 'M+': //Memory-Add
        Memory.memoryMath('+');
        return response = {
          mainDisplay: ''
        };

      case 'M-': //Memory-Subtract
        Memory.memoryMath('-');
        return response = {
          mainDisplay: ''
        };

      case 'MS': //Memory-Store
        Memory.memoryHistory();
        Memory.toggleMemory(false);
        return response = {
          mainDisplay: ''
        };

      case 'memory-history': //Memory-History
        console.log(Memory);
        alert(Memory.history);
        return {};

      // Keyboard Functions
      case '%':  //Percent
        Data.higherOperation('/100').then(
          result => {
            return response = {
              mainDisplay: result;
            }
          });

      case 'root': //Square-Root
        Data.higherOperation('Math.sqrt').then(
          result => {
            return response = {
              mainDisplay: result;
            }
          });

      case 'squared': //Squared
        Data.higherOperation('**2').then(
          result => {
            return response = {
              mainDisplay: result;
            }
          });

      case '1/x': //Reciprocal
        Data.higherOperation('1/').then(
          result => {
            return response = {
              mainDisplay: result;
            }
          });

      case 'CE': //Clear-Entry
        return response = {
          mainDisplay: ''
        };

      case 'C': //Clear-All
        Data.clearData(); //Data
        Memory.clearMemory(); //Memory
        return response = {
          mainDisplay: '',
          secondaryDisplay: ''
        };

      case 'divide': //Divide
        Data.basicOperation('/').then( result => {
          return result;
        });

      case 'multiply': //Multiply
        Data.basicOperation('*').then( result => {
          return result;
        });

      case 'minus': //Subtract
        Data.basicOperation('-').then( result => {
          return result;
        });

      case 'add': //Add
        Data.basicOperation('+').then( result => {
          return result;
        });

      case 'negate': //Plus-Minus (Negate)
        Data.higherOperation('0-').then(
          result => {
            return response = {
              mainDisplay: result;
            }
          });

      case '=': //Evaluate
        Data.basicOperation('=').then(
          result => {
            return result;
          });
    }
  }

  getHistory(){
    return Data.history;
  }
}

//Exports
export default Evaluate; // 'Evaluate' Object
