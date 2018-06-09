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
    const val = this.dataset.operator;
    this.props.pFunc(val);
  }

  renderClass(){
    if (this.props.btn.class){
      return `className={btnProps.Class}`;
    }
  }

  render(){
    const btnProps = this.props.btn;
    return (
      <div>
        <button
          {this.renderClass()}
          onClick={this.handleClick}
          data-operator={btnProps.operator}>
          {btnProps.innerHtml}
        </button>
      </div>
    );
  }
}

// Exports
export default Button; // Export <Button />
