import React, { Component } from 'react';
import './styling.css';

const ListItems = (props) => {
    let items = props.items.map((i) => {
        return (<div className="todo-app-list-item">
            <span className={ 
                'todo-app-list-item-description ' + (i.completed? 'complete' : 'incomplete')
            }>{i.description}</span>
            <span className="todo-app-list-item-check" onClick={() => {props.checkItem(i.index)}} >CHECK</span>
            <span className="todo-app-list-item-remove" onClick={ ()=> {props.removeItem(i.index)} }>Remove</span>
        </div>);
    });
return (<div className="todo-app-list-items">
            {items}
        </div>);
};

export default ListItems;