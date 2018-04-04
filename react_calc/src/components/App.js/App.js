import React from 'react';
//need to add CSS file
import Keyboard from '../Keyboard/Keyboard';
import Evaluator from '../Evaluator/Evaluator';


if
data.numberButton(this.innerHTML);

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      btnValue: '',
    }

    this.changeBtnValue = this.changeBtnValue.bind(this);
  }

  changeBtnValue(newBtnValue) {
    this.setState({btnValue: newBtnValue});
  }

  render() {
    return (
      <Evaluator btnValue={this.state.btnValue} />
      <Keyboard keys={keys} btnValue={this.changeBtnValue()} />
    )
  }
}
