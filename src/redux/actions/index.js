/**
 * The structure of this file is pretty much pulled out of the Redux documentation, since
 * it works with a TODO app as well. But you'll see that the structure of my code remains pretty
 * similar.
 */
/**
 * 
 * Action types
 */
export const ACTION_TODO_ADD = "ACTION_TODO_ADD";
export const ACTION_TODO_CHECK = "ACTION_TODO_CHECK";
export const ACTION_TODO_DELETE = "ACTION_TODO_DELETE";


/**
 * action creators - essentially functions that return objects used as Redux actions
 */

 export const addTodoItem = (description) => ({
    type: ACTION_TODO_ADD,
    description: description
 });

 export const checkTodoItem = (index) => ({
    type: ACTION_TODO_CHECK,
    index: index
 });

 export const removeTodoItem = (index) => ({
    type: ACTION_TODO_DELETE,
    index: index
 });