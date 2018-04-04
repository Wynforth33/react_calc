import React from 'react';
//Imports

export class Keyboard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const newBtnValue = this.dataset.operator;
    this.props.changeBtnValue(newBtnValue);
  }

  render() {
    const keys = [
      ['MC','MR','M+','M-','MS','MH'],
      ['PT','RT','SQ','RP'],
      ['CE','C','BS','D'],
      ['B7','B8','B9','M'],
      ['B4','B5','B6','S'],
      ['B1','B2','B3','A'],
      ['PM','B0','.','=']];

    return (
      <div id="keyboard" className="flex-column">{
        for (let r=0; r<keys.length, r++){
          let row = [];


        }
            return <Key onclick={this.handleClick} />
          })
      </div>
    )
  }
}
