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
    const val = this.props.btn.operator;
    this.props.onPress(val);
  }

  renderClass(){
    if (this.props.btn.class){
      return this.props.btn.class;
    }
  }

  render(){
    const btnProps = this.props.btn;
    return (
      <div>
        <button
          className={this.renderClass()}
          onClick={this.handleClick}>
          {btnProps.innerHtml}
        </button>
      </div>
    );
  }
}

// Exports
export default Button; // Export <Button />
