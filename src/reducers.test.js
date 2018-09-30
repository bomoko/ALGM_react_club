import * as reducers from './reducers';
import * as actions from './actions';

test('It should return a structured object with an index and empty items array', () => {
    let state = reducers.todoApp(undefined, {action:"noting"});
    expect(state.items.length).toBe(0);
});

test('It should add a new element on to the items when passed the right action', () => {
    let state = reducers.todoApp(undefined, actions.addTodoItem("test"));
    expect(state.items.length).toBe(1);
    expect(state.items[0].description).toBe("test");
});

test('It should remove an item given a particular index', () => {
    let state = reducers.todoApp(undefined, actions.addTodoItem("test 1"));
    expect(state.items.length).toBe(1);
    state = reducers.todoApp(state, actions.addTodoItem("test 2"));
    expect(state.items.length).toBe(2);
    let testItem = state.items.filter((item) => { return item.description == 'test 1';})[0];
    expect(testItem.description).toBe('test 1');
    state = reducers.todoApp(state, actions.removeTodoItem(testItem.index));
    expect(state.items.length).toBe(1);
});

test('It should be able to check an item', () => {
    let state = reducers.todoApp(undefined, actions.addTodoItem("test 1"));
    expect(state.items.length).toBe(1);
    state = reducers.todoApp(state, actions.addTodoItem("test 2"));
    expect(state.items.length).toBe(2);
    let testItem = state.items.filter((item) => { return item.description == 'test 1';})[0];
    expect(testItem.completed).toBe(false);
    state = reducers.todoApp(state, actions.checkTodoItem(testItem.index));
    let checkedItem = state.items.filter((item) => { return item.index == testItem.index;})[0];
    expect(checkedItem.completed).toBe(true);
    state = reducers.todoApp(state, actions.checkTodoItem(testItem.index));
    checkedItem = state.items.filter((item) => { return item.index == testItem.index;})[0];
    expect(checkedItem.completed).toBe(false);
});