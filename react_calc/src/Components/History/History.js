// Imports
import React from 'react';
import './History.css'; // 'History' Stylesheet

// Create <History /> ['React'(Component)]
class History extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.getHistory();
  }

  render(){
    return (
      <div>
        <button className="menu" id="history" onClick={this.handleClick}>H&blacktriangledown;</button>
      </div>
    );
  }
}

// Exports
export default History; // Export <History />
