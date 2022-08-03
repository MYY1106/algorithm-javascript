/**
 * @description 双链表 有头指针和尾指针
 */

class LinkNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

var MyLinkedList = function () {
    this._size = 0;
    this._tail = null;
    this._head = null;
};

/** 
 * @description 获取链表中第 index 个节点的值。如果索引无效，则返回-1
 * @param {number} index
 * @param {'val'|'node'} mode 
 * @return {number}
 */
MyLinkedList.prototype.get = function (index, mode = 'val') {
    if (!this.isValidate(index)) {
        if (mode = 'val') return -1
        else return null
    }

    let count = 0
    let item = this._head
    while (count !== index) {
        item = item.next
        count++
    }

    if (mode === 'val') return item.val
    else return item
};

/** 
 * @description 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new LinkNode(val)
    newNode.next = this._head
    newNode.prev = null

    if (this._head !== null) { // 如果head不为空
        this._head.prev = newNode
    } else { // 如果head为空，说明这个链表原先是个空链表，所以也要处理tail
        this._tail = newNode
    }
    this._head = newNode

    this._size++
};

/** 
 * @description 将值为 val 的节点追加到链表的最后一个元素
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newNode = new LinkNode(val)
    newNode.prev = this._tail
    newNode.next = null

    if (this._tail !== null) { // 如果tail不为空
        this._tail.next = newNode
    } else { // 如果tail为空，说明这个链表原先是个空链表，所以也要处理head
        this._head = newNode
    }
    this._tail = newNode

    this._size++
};

/** 
 * @description 在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index <= 0) return this.addAtHead(val) // 如果index小于等于0，则在头部插入节点
    if (index === this._size) return this.addAtTail(val)
    if (index > this._size) return

    const newNode = new LinkNode(val)
    const item = this.get(index, 'node')

    newNode.next = item
    newNode.prev = item.prev
    item.prev.next = newNode
    item.prev = newNode

    this._size++
};

/** 
 * @description 如果索引 index 有效，则删除链表中的第 index 个节点
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (!this.isValidate(index)) return

    const item = this.get(index, 'node')
    item.prev && (item.prev.next = item.next) // 如果item不是头节点
    item.next && (item.next.prev = item.prev) // 如果item不是尾节点

    if (index === 0) this._head = item.next // 如果item是头节点，需要将head指向item的下一个
    if (index === this._size - 1) this._tail = item.prev // 如果item是尾节点，需要将tail指向item的上一个

    this._size--
};

/** 
 * @description 判断索引 index 是否有效
 * @param {number} index
 */
MyLinkedList.prototype.isValidate = function (index) {
    if (index < 0 || index >= this._size) return false
    else return true
}

const head = new MyLinkedList()
const methods = ["addAtHead", "get", "addAtIndex", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtHead", "deleteAtIndex", "addAtIndex", "addAtHead", "deleteAtIndex"]
const params = [[9], [1], [1, 1], [1, 7], [1], [7], [4], [1], [1, 4], [2], [5]]
methods.forEach((method, index) => console.log(head[method](...params[index])))



 /**
  * @description 双链表 有头指针和尾指针 (未优化版)
  */

// class LinkNode {
//     /** 
//       * @param {number} val
//       * @param {LinkNode|null} next
//       * @param {LinkNode|null} prev
//       */
//     constructor(val) {
//         this.val = val
//         this.next = null
//         this.prev = null
//     }
// }

// var MyLinkedList = function () {
//     this._size = 0;
//     this._tail = null;
//     this._head = null;
// };

// /** 
//  * @description 获取链表中第 index 个节点的值。如果索引无效，则返回-1
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function (index) {
//     if (index < 0) return -1
//     if (index >= this._size) return -1

//     let count = 0
//     let item = this._head
//     while (count !== index) {
//         item = item.next
//         count++
//     }
//     return item.val
// };

// /** 
//  * @description 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function (val) {
//     const newNode = new LinkNode(val)
//     newNode.next = this._head
//     newNode.prev = null
//     if (this._head !== null) {
//         this._head.prev = newNode
//     } else {
//         this._tail = newNode
//     }
//     this._head = newNode
//     this._size++
// };

// /** 
//  * @description 将值为 val 的节点追加到链表的最后一个元素
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function (val) {
//     const newNode = new LinkNode(val)
//     newNode.prev = this._tail
//     newNode.next = null
//     if (this._tail !== null) {
//         this._tail.next = newNode
//     } else {
//         this._head = newNode
//     }
//     this._tail = newNode
//     this._size++
// };

// /** 
//  * @description 在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function (index, val) {
//     if (index < 0) return this.addAtHead(val)
//     if (index == 0) return this.addAtHead(val)
//     if (index === this._size) return this.addAtTail(val)
//     if (index > this._size) return -1

//     let newNode = new LinkNode(val)
//     let count = 0;
//     let item = this._head
//     while (count !== index) {
//         item = item.next
//         count++
//     }

//     newNode.next = item
//     newNode.prev = item.prev
//     item.prev.next = newNode
//     item.prev = newNode
//     this._size++
// };

// /** 
//  * @description 如果索引 index 有效，则删除链表中的第 index 个节点
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function (index) {
//     if (index >= this._size || index < 0) return

//     let count = 0;
//     let item = this._head
//     while (count !== index) {
//         item = item.next
//         count++
//     }
//     item.prev && (item.prev.next = item.next)
//     item.next && (item.next.prev = item.prev)
//     if (index === 0) this._head = item.next
//     if (index === this._size - 1) this._tail = item.prev
//     this._size--
// };