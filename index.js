
class Parent {
    constructor() {
        if (this.constructor === Parent) {
            throw new Error("Can't instantiate abstract class!");
        }
        // Animal initialization...
        this.type = 'parent'
    }
    print() {
        console.log(this.type)
    }
}

const someSetOfMethodMixin = Base => class extends Base {
    test() {
        console.log('test')
    }
};

const someOtherSetOfMethodMixin = Base => class extends Base {
    anotherTest() {
        console.log('another test')
    }
};

class ChildOne extends someSetOfMethodMixin(someOtherSetOfMethodMixin(Parent)) {
    constructor() {
        super()
        this.type = 'child'
    }

}

class ChildTwo extends Parent { }

const child1 = new ChildOne()
const child2 = new ChildTwo()

console.log(child1)
console.log(child2)