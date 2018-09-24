class TodoListManager {
    constructor() {
        this.items = [];
        this.nextIndex = 0;
    }

    setStateTarget(stateTarget) {
        this.stateTarget = stateTarget;
    }

    updateStateTarget() {
        if(this.stateTarget !== undefined) {
            this.stateTarget.populateItems(this.getItems());
        }
    }

    getItems() {
        return this.items.slice();
    }

    createItem(index, description) {
        return {
            index: index,
            description: description,
            completed: false
        };
    }

    checkItem(index) {
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].index === index) {
                this.items[i].completed = !this.items[i].completed;
                break;
            }
        }
        this.updateStateTarget();
    }

    getIndex() {
        let index = this.nextIndex;
        this.nextIndex = this.nextIndex + 1;
        return index;
    }

    addItem(description) {
        let index = this.getIndex();
        this.items.push(this.createItem(index, description));
        this.updateStateTarget();
        return index;
    }

    removeItem(index) {
        this.items = this.items.filter(v => v.index !== index);
        this.updateStateTarget();
    }

    getItem(index) {
        let retArray = this.items.filter((item) => {return item.index === index;});
        if(retArray.length > 0) {
            return retArray.pop(); //again, kinda ugly - but we'll refactor - we have tests :D
        }
        return undefined;
    }
}

export default TodoListManager;