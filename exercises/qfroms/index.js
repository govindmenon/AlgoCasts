// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    transfer(source, dest){
        while(source.peek()){
            dest.push(source.pop());
        }
    }

    add(record){
        this.stack1.push(record);
    }

    remove(){
        this.transfer(this.stack1, this.stack2);
        let record = this.stack2.pop();
        this.transfer(this.stack2, this.stack1);
        return record;
    }

    peek(){
        this.transfer(this.stack1, this.stack2);
        let record = this.stack2.peek();
        this.transfer(this.stack2, this.stack1);
        return record;
    }
}

module.exports = Queue;
