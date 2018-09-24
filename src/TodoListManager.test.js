import TodoListManager from './TodoListManager';

test('allows us to add an item', () => {
    let listFactory = new TodoListManager();
    listFactory.addItem("arb item");
    return expect(listFactory.getItems().length).toBe(1);
});

test('it should return an element by its index', () => {
    let listFactory = new TodoListManager();
    let firstIndex = listFactory.addItem("arb item 1");
    let identifyingString = "arb item 2";
    let secondIndex = listFactory.addItem(identifyingString);
    expect(listFactory.getItem(secondIndex).description).toBe(identifyingString);
});

test('it should remove an element from the list', () => {
    let listFactory = new TodoListManager();
    let firstIndex = listFactory.addItem("arb item 1");
    let identifyingString = "arb item 2";
    let secondIndex = listFactory.addItem(identifyingString);
    let thirdIndex = listFactory.addItem("A third");
    expect(listFactory.getItems().length).toBe(3);
    listFactory.removeItem(secondIndex);
    expect(listFactory.getItems().length).toBe(2);
});

test('it should let you check the element', () => {
    let listFactory = new TodoListManager();
    let firstIndex = listFactory.addItem("arb item 1");
    expect(listFactory.getItem(firstIndex).completed).toBe(false);
    listFactory.checkItem(firstIndex);
    expect(listFactory.getItem(firstIndex).completed).toBe(true);
});