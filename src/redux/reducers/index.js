import * as actions from '../actions/index';

const initialState = {
    items: [],
    nextIndex: 1
};


const addNewTodoItem = (state, action) => {
    let newStateItems = state.items.slice();
    let nextIndex = state.nextIndex;
    newStateItems.push({
        index: nextIndex,
        completed: false,
        description: action.description
    });
    return {
        nextIndex: nextIndex + 1,
        items: newStateItems
    }
};

const removeTodoItemByIndex = (state, action) => ({
    items: state.items.filter((item) => {return item.index !== action.index})
});

const checkTodoItemByIndex = (state, action) => ({
    items: state.items.map((item) => {
        if(item.index === action.index) {
            return Object.assign({}, item, {
                completed: !item.completed
            });
        }
        return item;
    })
});

/**
 * Since this is such a simple app, we'll just stick (for now) with my own root reducer
 * rather than using combineReducers() 
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const todoApp = (state = initialState, action) => {
    switch(action.type) {
        case(actions.ACTION_TODO_ADD):
            return Object.assign({}, state, addNewTodoItem(state, action));
        break;
        case(actions.ACTION_TODO_CHECK):
            return Object.assign({}, state, checkTodoItemByIndex(state, action));
        break;
        
        case(actions.ACTION_TODO_DELETE):
            return Object.assign({}, state, removeTodoItemByIndex(state, action));
        break;
        default:
            return state;
        break;
    }
}