// ['Memory'(Object)] for Calculator Memory Variables/Functions
const Memory = {
  // Memory 'State'
  history: [],
  firstTerm: 0,
  secondTerm: 0,
  notInUse: true,
  specialButtons: document.getElementsByClassName('not-in-use'),

  //Memory Methods
  memoryHistory: (x, operator, y, e) => {
    if (operator) {
  		const equationString = `${x} ${operator} ${y} = ${e}`;
  		Memory.history.push(equationString);
  	} else {
  		Memory.firstTerm = document.getElementById('display').innerHTML;
  		Memory.history.push(Memory.firstTerm);
  	}
  },

  toggleMemory: boolean => {
    Memory.notInUse = boolean;
  	if (Memory.notInUse) {
  		for (let i = 0; i < Memory.specialButtons.length; i++){
  			Memory.specialButtons[i].style.color = 'rgba(0,0,0,0.5)';
  		}
    } else {
  		for (let i = 0; i < Memory.specialButtons.length; i++){
  			Memory.specialButtons[i].style.color = 'rgba(0,0,0,1)';
  		}
  	}
  },

  memoryMath: operator => {
    Memory.secondTerm = document.getElementById('display').innerHTML;
  	const x = parseInt(Memory.firstTerm);
  	const y = parseInt(Memory.secondTerm);
  	const e = parseFloat(eval(`x ${operator} y`).toFixed(9)).toString();
  	Memory.memoryHistory(Memory.firstTerm, '+', Memory.secondTerm, e);
  	Memory.firstTerm = e;
  	Memory.toggleMemory(false);
  },

  clearMemory: () => {
    Memory.history = [];
  	Memory.firstTerm = 0;
  	Memory.secondTerm = 0;
  	Memory.toggleMemory(true);
  },
}

// Exports
export default Memory; // 'Memory' Object
