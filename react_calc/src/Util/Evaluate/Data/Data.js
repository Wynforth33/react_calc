// ['Data'(Object)] for Main Calculator Variables/Functions
const Data = {
  // Data 'State'
  history: [],
  equation: '',
  firstTerm: 0,
  currentOperator:'',

  higherOperation: operator => {
    const val = document.getElementById('display').innerHTML;
  	let x, y, xOperated;
  	if (val === ''){
  		x = Data.firstTerm;
  	} else {
  		x = document.getElementById('display').innerHTML;
  		y = Data.firstTerm;
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
    return xOperated;
  },

  basicOperation: operator => {
    let response;
    const val = document.getElementById('display').innerHTML;
  	if (val !== ''){
  		Data.firstTerm = document.getElementById('display').innerHTML;
  		Data.currentOperator = operator;
  		if (operator !== '='){
  			Data.equation += `${Data.firstTerm} ${Data.currentOperator} `;
  		} else {
  			Data.equation += `${Data.firstTerm} `;
  		}
  		Data.history.push(`${Data.firstTerm} ${Data.currentOperator} `);
      return response = {
        secondaryDisplay: Data.equation,
        mainDisplay: ''
      }
  	}
  	if (operator === '=') {
  		let e = parseFloat(eval(Data.equation).toFixed(9)).toString();
  		if (e.length > 11) {
  			e = e.substring(0,11);
  		}
      Data.history.push(`${Data.equation}= ${e}`);
      Data.equation = '';
      return response = {
        secondaryDisplay: '',
        mainDisplay: e,
        isEqual: true
      }
  	}
  },

  clearData: () => {
    Data.history = [];
  	Data.equation = '';
  	Data.firstTerm = 0;
  	Data.currentOperator = '';
  }, //yes
};

// Exports
export default Data; // 'Data' Object
