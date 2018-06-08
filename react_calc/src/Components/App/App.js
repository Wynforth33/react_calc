// Imports
import React from 'react';
import './App.css'; // 'App' Stylesheet
import Header from '../Header/Header'; // <Header />
import Display from '../Display/Display'; // <Display />
import MemoryFunctions from '../MemoryFunctions/MemoryFunctions'; // <MemoryFunctions />
import Keyboard from '../Keyboard/Keyboard'; // <Keyboard />
import Memory from '../../Util/Memory/Memory'; // 'Memory' Object
import Data from '../../Util/Data/Data'; // 'Data' Object

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
    this.getMenu = this.getMenu.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.setMainDisplay = this.setMainDisplay.bind(this);
    this.setSecondaryDisplay = this.setSecondaryDisplay.bind(this);

  }

  getMenu(){
    alert('Under Construction!');
  }

  getHistory(){
    alert('Under Construction!');
    // console.log(Data.history);
    // console.log(Data);
  }
  setMainDisplay(val){},

  setSecondaryDisplay(val){},

  clearData(){},

  clearEquation(){},

  clearDisplay(){
    this.setState({mainDisplay: ''});
  },

  clearSecondaryDisplay(){
    this.setState({secondaryDisplay: ''});
  },

  performFunction(value){
    Evaluate.evaluate(value);

  }

  render() {
    return (
      <Header getMenu={this.getMenu} getHistory={this.getHistory} />
      <Display secondaryDisplay={this.state.secondaryDisplay} mainDisplay={this.state.secondaryDisplay} />
      <MemoryFunctions clearMemory={this.clearMemory} />
      <Keyboard
        clearData={this.clearData}
        clearEquation={this.clearEquation}
        clearDisplay={this.clearDisplay}
        clearSecondaryDisplay={this.clearSecondaryDisplay} />
    );
  }
}

// Exports
export default App; // Export <App />
