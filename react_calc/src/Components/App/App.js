// Imports
import React from 'react';
import './App.css'; // 'App' Stylesheet
import Header from '../Header/Header'; // <Header />
import Display from '../Display/Display'; // <Display />
import MemoryFunctions from '../MemoryFunctions/MemoryFunctions'; // <MemoryFunctions />
import Keyboard from '../Keyboard/Keyboard'; // <Keyboard />
import Memory from '../../Util/Memory/Memory'; // 'Memory' Object
import Data from '../../Util/Data/Data';

// Create <App /> ['React'(Component)]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      secondaryDisplay: '',
      mainDisplay: '',
      history: [],
      equation: '',
      firstTerm: 0,
      currentOperator:'',
    };
  }
  
  getMenu(){
    alert('Under Construction!');
  }

  getHistory(){
    alert('Under Construction!');
    // console.log(Data.history);
    // console.log(Data);
  }
  displayValue: val => {
    const input = document.getElementById('display').innerHTML
  	if (input.length < 11) {
  		document.getElementById('display').innerHTML += val;
  	}
  },
  displayValueSecondary: val => {
  	document.getElementById('secondary-display').innerHTML = '';
  	document.getElementById('secondary-display').innerHTML += val;
  },
  clearData: () => {
  	data.equation = '';
  	data.firstTerm = 0;
  	data.currentOperator = '';
  },
  clearEquation: () => {
  	data.equation = '';
  },
  clearDisplay: () => {
  	document.getElementById('display').innerHTML = '';
  },
  clearSecondaryDisplay: () => {
  	document.getElementById('secondary-display').innerHTML = '';
  },

  render() {
    return (
      <Header getMenu={this.getMenu} getHistory={this.getHistory} />
      <Display secondaryDisplay={this.state.secondaryDisplay} mainDisplay={this.state.secondaryDisplay} />
      <MemoryFunctions />
      <Keyboard />
    );
  }
}

// Exports
export default App; // Export <App />
