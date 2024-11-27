class Node {
    constructor(key, val){
        this.key = key;
        this.prev = null;
        this.next = null;
        this.key = key
        this.value = val;
    }
    }
    
    var LRUCache = function (capacity) {
        this.head = null;
        this.tail = null;
        this.map = {};
        this.size = 0;
        this.cap = capacity;
    };
    
    /** 
     * @param {number} key
     * @return {number}
     */

    
    LRUCache.prototype.moveFromEnd = function(node){
        this.tail = node.prev;
        this.tail.next = null;
        this.head.prev = node;
        node.next = this.head;
        node.prev = null;
        this.head = node;
      
    }
    LRUCache.prototype.moveFromPos = function(node){
     
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
     
    }
    LRUCache.prototype.get = function (key) {
        let node;
        /**
         * If key doesn't exist
         */
        if (this.map[key] === undefined) {
            return -1;
        }

        node = this.map[key];
         /**
          * If node is head , just return it
          *  */   
        if (this.head === node) return node.value;
        /**
         * If it is tail
         */
        if (this.tail === node){
            this.moveFromEnd(node);
            return node.value;
        }
       /**
        * If this is some node in between
        */      
       this.moveFromPos(node);
       // console.log('get ops',this.head,this.tail)
        return node.value;
    };
    
    // [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]
    
    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    LRUCache.prototype.put = function (key, value) {
     //   console.log('********put start*******',key)
        let node = new Node(key, value);
        /**
         * If node exist aleady, so we have to move
         * existent node
         */
        if(this.map[key]!=undefined){

         let node = this.map[key];
         node.value = value;
         
         if(this.size === 1){
            return;
         }
         // If it is already top node , we don't have to do anything
         if(this.head.key === key) return;           

         if(this.tail.key === key){
            // moving tail 
            this.moveFromEnd(node);
            return;
         }
         this.moveFromPos(node);

          return;  
        }
        /**
         * If capacity is already breached
         * then we need to remove last node and add new node
         * 
         */


        if (this.size === this.cap) {
          /**
           * If size is one
           */
          if(this.cap === 1){
            delete this.map[this.head.key];
            this.head = node;
            this.tail = node;
            this.map[key] = node;
            return;
          }   
            // shifting the tail
            let lastNode = this.tail;
            this.tail = lastNode.prev;
            //if(this.tail)// redundant
            this.tail.next = null;
            // deleting last node
            lastNode.next = null;
            lastNode.prev = null;
            delete this.map[lastNode.key];
            this.map[key] = node;
            // Moving to top of head
            this.head.prev = node;
            node.next = this.head;
            node.prev = null;
            this.head = node;
            return;
        }
       
        // If head is null
        if(!this.head){
            this.head = node;
            this.tail = this.head;
            this.map[key] = node;
            this.size++;
            return;
        }
    
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.size++;
        this.map[key] = node;
    
    };
