class Data = {
  numbers: ['0','1','2','3','4','5','6','7','8','9'],
  keys: document.getElementById('keyboard').getElementsByTagName('button'),
  history: [],
  equation: '',
  firstTerm: 0,
  currentOperator:'',
  numberButton: val => {
  	if (data.currentOperator === '=') {
  		data.clearDisplay();
  		data.currentOperator = '';
  		data.displayValue(val);
  	} else {
  		data.displayValue(val);
  	}
  }
  higherOperation: operator => {
    const val = document.getElementById('display').innerHTML;
  	let x;
    let y;
  	let xOperated;
  	if (val === ''){
  		x = data.firstTerm;
  	} else {
  		x = document.getElementById('display').innerHTML;
  		y = data.firstTerm;
  	}
    switch (operator) {
      case '/100':
  	    const percentOfX = parseFloat((x /100).toFixed(9));
  	    if (!y) {
  		    xOperated = parseFloat((x * percentOfX).toFixed(9)).toString();
  	    } else {
  		    xOperated = parseFloat((y * percentOfX).toFixed(9)).toString();
  	    }
        break;
  	  case 'Math.sqrt':
  		  if (x < 0){
  		    document.getElementById('display').innerHTML = 'Error!';

  		  }	else {
  		    xOperated = parseFloat(eval(`${operator}(${x})`).toFixed(9)).toString();
  		  }
        break;
  	  case '**2':
  		  xOperated = parseFloat(eval(`${x}${operator}`).toFixed(9)).toString();
        break;
  	  case '1/':
  		  xOperated = parseFloat(eval(`${operator}${x}`).toFixed(9)).toString();
        break;
  	  case '0-':
  		  xOperated = parseFloat((0 - x).toFixed(9)).toString();
        break;
  	}
  	if (xOperated.length > 11) {
  		xOperated = xOperated.substring(0,11);
  	}
    document.getElementById('display').innerHTML = xOperated;
  }
  basicOperation: operator => {
    const val = document.getElementById('display').innerHTML;
  	if (val !== ''){
  		data.firstTerm = document.getElementById('display').innerHTML;
  		data.currentOperator = operator;
  		if (operator !== '='){
  			data.equation += `${data.firstTerm} ${data.currentOperator} `;
  		} else {
  			data.equation += `${data.firstTerm} `;
  		}
  		data.history.push(`${data.firstTerm} ${data.currentOperator} `);
  		data.displayValueSecondary(data.equation);
  		data.clearDisplay();
  	}
  	if (operator === '=') {
  		let e = parseFloat(eval(data.equation).toFixed(9)).toString();
  		if (e.length > 11) {
  			e = e.substring(0,11);
  		}
  		data.displayValue(e);
  		data.history.push(`${data.equation}= ${e}`);
  		data.equation = '';
  		data.clearSecondaryDisplay();
  	}
  }
  displayValue: val => {
    const input = document.getElementById('display').innerHTML
  	if (input.length < 11) {
  		document.getElementById('display').innerHTML += val;
  	}
  }
  displayValueSecondary: val => {
  	document.getElementById('secondary-display').innerHTML = '';
  	document.getElementById('secondary-display').innerHTML += val;
  }
  clearData: () => {
  	data.equation = '';
  	data.firstTerm = 0;
  	data.currentOperator = '';
  }
  clearEquation: () => {
  	data.equation = '';
  }
  clearDisplay: () => {
  	document.getElementById('display').innerHTML = '';
  }
  clearSecondaryDisplay: () => {
  	document.getElementById('secondary-display').innerHTML = '';
  }
};

export default Data; 
