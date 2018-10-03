import React, { Component } from 'react';
import ListItems from './ListItems/component';

const addItem = (dispatch) => {
    const ta = document.getElementById("todo-app-new-item-description");
        let newText = ta.value;
        dispatch(newText);
        ta.value = "";
}

const TodoApp = (props) => {
    return (
        <div className="todo-app">
            <div className="todo-app-add">
                <h5>Add new item</h5>
                <textarea id="todo-app-new-item-description"></textarea>
                <button onClick={()=> {addItem(props.addItem)}}>Add New</button>
            </div>
            <hr/>
            <h5>List Items</h5>
            <ListItems {...props}/>
        </div>
    );
};

export default TodoApp;
