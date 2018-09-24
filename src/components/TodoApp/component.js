import React, { Component } from 'react';
import ListItems from '../ListItems/component';

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        const ta = document.getElementById("todo-app-new-item-description");
        let newText = ta.value;
        this.props.addItem(newText);
        ta.value = "";
    }

    render() {
        return (
            <div className="todo-app">
                <div className="todo-app-add">
                    <h5>Add new item</h5>
                    <textarea id="todo-app-new-item-description"></textarea>
                    <button onClick={this.addItem}>Add New</button>
                </div>
                <hr/>
                <h5>List Items</h5>
                <ListItems {...this.props}/>
            </div>
        );
    }
}

export default TodoApp;
