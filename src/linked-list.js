const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data);
        if(this.length == 0){
            this._head = newNode;
            this._tail = newNode;
        }
        else{
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;     
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : this._head;
    }

    tail() {
        return this._tail ? this._tail.data : this._tail;
    }

    at(index) {
        let i = 0;
        let node = this._head;
        while(i != index){
            node = node.next;
            i++;
        }
        return node.data;
    }

    insertAt(index, data) {
        if (!this.length) {
            this.append(data);
        }else{
            let i = 0;
            let node = this._head;
            let newNode = new Node(data);
            if (index == 0){
                newNode.prev = null;
                newNode.next = this._head;
                this._head.prev = newNode;
                this._head = newNode;
            }
            else{
                while(i != index - 1){
                    node = node.next;
                    i++;
                }
                newNode.next = node.next;
                node.next.prev = newNode;
                newNode.prev = node;
                node.next = newNode;                    
            }
            this.length++;
            return newNode;  
        } 
    }

    isEmpty() {
        return this.length ? false: true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (this.length > 1){
            let i = 0;
            let node = this._head;
            while(i != index){
                node = node.next;
                i++;
            }
            node.next.prev = node.prev;
            node.prev.next = node.next;
            node.next = null;
            node.prev = null;
            this.length--;
        }
        return this;
    }

    reverse() {
        if(this.length > 1){
            this._head = this._tail;
            this._head.next = this._tail.prev;
            this._head.prev = null;

            let node = this._head.next;
            for(let i = this.length - 2; i > 0; i--){
                let next = node.prev;
                let prev = node.next;
                node.next = next;
                node.prev = prev;
                node = next;
            }

            this._tail = node;
            this._tail.prev = this._tail.next;
            this._tail.next = null;
        }
        return this;
    }

    indexOf(data) {
        let i = 0;
        let node = this._head;
        while(i < this.length){
            if(node.data === data){
                return i;
            }
            node = node.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
