// Imports
import React from 'react';
import './Button.css'; // 'Button' Stylesheet

// Create <Button /> ['React'(Component)]
class Button extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const value = this.dataset.operator;
    this.props.performFunction(value);
  }

  // if ('Memory-Clear', 'Memory-Recall', or 'Memory-History' will need to add a className="not-in-use")
  // Will need to somehow map based

  render(){
    return (
      <div>
        <button
         onClick={this.handleClick}
         data-operator={$value1}>
         {$value2}
         </button>
      </div>
    );
  }
}

// Exports
export default Button; // Export <Button />
