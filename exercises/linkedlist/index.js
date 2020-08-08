// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        let n = new Node(data,this.head);
        this.head = n;
    }

    size(){
        let curr = this.head;
        let size = 0;
        while(curr != null){
            size++;
            curr = curr.next;
        }

        return size;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let curr = this.head;

        if(!curr){
            return null;
        }

        if(!curr.next){
            return this.head;
        }

        while(curr && curr.next != null){
            curr = curr.next;
        }

        return curr;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        this.head = this.head ? this.head.next : null;
    }

    removeLast(){
        let curr = this.head;
        let prev = this.head;

        if(!curr){
            return;
        }
        if(!curr.next){
            this.head = null;
        }
        
        while(curr && curr.next != null){
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;
    }

    insertLast(data){
        let n = new Node(data);
        let last = this.getLast();

        if(last){
            last.next = n;
        }else{
            this.head = n;
        }
    }

    getAt(index){
        let curr = this.head;

        if(!curr){
            return null;
        }

        let count = 0;
        while(curr){
            if(count == index){
                return curr;
            }
            curr = curr.next;
            count++;
        }

        return null;
    }

    removeAt(index){
        let curr = this.head;
        let prev = this.head;

        if(!curr){
            return;
        }

        let counter = 0;
        while(curr){
            if(counter == index){
                if(curr == this.head){
                    this.head = this.head.next;
                    return;
                }
                prev.next = curr.next;
                return;
            }
            prev = curr;
            curr = curr.next;
            counter++;
        }
    }

    insertAt(data, index){
        let curr = this.head;
        
        let n = new Node(data);
        if(index == 0){
            this.head = n;
            n.next = curr;
            return;
        }

        let prev = this.head;
        curr = curr.next;

        let counter = 1;
        while(curr){
            if(counter == index){
                prev.next = n;
                n.next = curr;
                return;
            }
            prev = curr;
            curr = curr.next;
            counter++;
        }

        if(counter <= index){
            prev.next = n;
        }
    }

    forEach(fn){
        let curr = this.head;
        while(curr){
            fn(curr);
            curr = curr.next;
        }
    }

    *[Symbol.iterator](){
        let curr = this.head;
        while(curr){
            yield curr;
            curr = curr.next;
        }
    }
}

module.exports = { Node, LinkedList };
