import React, { Component } from 'react';

class TodoItem extends Component {
  onClick = () => {
    this.props.onClick(this.props.text);
  }

  render() {
    return (
      <li key={this.key}>
        <label>
          <input type="checkbox" checked={this.props.checked} onChange={this.onClick} />
          &nbsp;{this.props.text}
        </label>
      </li>
    )
  }
}

export default TodoItem;

// This is a function attempt
// import React from 'react';

// const TodoItem = ({ itemData, onChange }) => {
//   return (
//     <li>
//       <label>
//         <input type="checkbox" checked={itemData.checked} onChange={onChange}/>
//         &nbsp;{itemData.text}
//       </label>
//     </li>
//   );
// };

// export default TodoItem;
