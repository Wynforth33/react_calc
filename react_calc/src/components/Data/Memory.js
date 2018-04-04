class Memory = {
  history: [],
  firstTerm: 0,
  secondTerm: 0,
  notInUse: true,
  specialButtons: document.getElementsByClassName('not-in-use'),
  memoryHistory: (x, operator, y, e) => {
    if (operator) {
  		const equationString = `${x} ${operator} ${y} = ${e}`;
  		memory.history.push(equationString);
  	} else {
  		memory.firstTerm = document.getElementById('display').innerHTML;
  		memory.history.push(memory.firstTerm);
  	}
  }
  toggleMemory: boolean => {
    memory.notInUse = boolean;
  	if (memory.notInUse) {
  		for (let i = 0; i < memory.specialButtons.length; i++){
  			memory.specialButtons[i].style.color = 'rgba(0,0,0,0.5)';
  		}
    } else {
  		for (let i = 0; i < memory.specialButtons.length; i++){
  			memory.specialButtons[i].style.color = 'rgba(0,0,0,1)';
  		}
  	}
  }
  memoryMath: operator => {
    memory.secondTerm = document.getElementById('display').innerHTML;
  	const x = parseInt(memory.firstTerm);
  	const y = parseInt(memory.secondTerm);
  	const e = parseFloat(eval(`x ${operator} y`).toFixed(9)).toString();
  	memory.memoryHistory(memory.firstTerm, '+', memory.secondTerm, e);
  	memory.firstTerm = e;
  	memory.toggleMemory(false);
  }
  clearMemory: () => {
    memory.history = [];
  	memory.firstTerm = 0;
  	memory.secondTerm = 0;
  	memory.toggleMemory(true);
  }
}

export default Memory; 
