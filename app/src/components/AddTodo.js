import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: ''
    };
  }
    
  render() {
    return (
      <div className="AddTodo">
        <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    );
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  addItem() {
      this.props.addItem(this.state.inputValue);
      this.setState({
          inputValue: ''
      })
  }
}

export default AddTodo;
