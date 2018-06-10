// Imports
import React from 'react';
import './App.css'; // 'App' Stylesheet
import Header from '../Header/Header'; // <Header />
import Display from '../Display/Display'; // <Display />
import Keyboard from '../Keyboard/Keyboard'; // <Keyboard />
import Evaluate from '../../Util/Evaluate/Evaluate'; // 'Evaluate' Data Object

const numbers = ['0','1','2','3','4','5','6','7','8','9','backspace'];

// Create <App /> ['React'(Component)]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      secondaryDisplay: '',
      mainDisplay: '',
      isEqual: false
    };
    this.getMenu = this.getMenu.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.numberButton = this.numberButton.bind(this);
    this.performFunction = this.performFunction.bind(this);

  }
  // Bound Functions (To Be Passsed)
  getMenu(){
    alert('Under Construction!');
  }

  getHistory(){
    const history = Evaluate.getHistory();
    alert(history)
    console.log(history);
  }

  performFunction(val){
    if (numbers.includes(val)) {
      this.numberButton(val);
    } else {
      const result = Evaluate.evaluate(val);
      this.setState(result);
    }
  }

  // Local Functions (Not To Be Passed)
  updateMainDisplay(val){
    const input = this.state.mainDisplay;
    if (input.length < 11) {
      const newInput = this.state.mainDisplay.concat(val);
      this.setState({mainDisplay:newInput});
    }
  }

  numberButton(val){
    if (this.state.isEqual) {
      this.clearDisplay();
      this.clearFunction();
      this.updateMainDisplay(val);
    } else if (val === 'backspace') {
      const newValueBack = this.state.mainDisplay.slice(0, -1);
      this.updateMainDisplay(newValueBack);
    } else if (val === '.') {
      if (!this.state.mainDisplay.includes('.')){
        const newValueDecimal = this.state.mainDisplay.concat('.');
        this.updateMainDisplay(newValueDecimal);
      }
    } else {
      this.updateMainDisplay(val);
    }
  }

  clearDisplay(){
    this.setState({mainDisplay: ''});
  }

  clearFunction(){
    this.setState({currentOperator: false});
  }

  render() {
    return (
      <div>
        <Header getMenu={this.getMenu} getHistory={this.getHistory} />
        <Display secondaryDisplay={this.state.secondaryDisplay} mainDisplay={this.state.mainDisplay} />
        <Keyboard onPress={this.performFunction}/>
      </div>
    );
  }
}

// Exports
export default App; // Export <App />
