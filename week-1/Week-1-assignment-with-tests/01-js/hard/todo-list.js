/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.myList = new Array();
  }
  add(todo){
    this.myList.push(todo);
  }
  remove(indexOfTodo){
    let arr = [];
    let cnt = 0;
    while(cnt != indexOfTodo && cnt < this.myList.length){
      arr.push(this.myList[cnt]);
      cnt++
    }
    cnt++;
    while(cnt < this.myList.length){
      arr.push(this.myList[cnt]); 
      cnt++ 
    }
    this.clear();
    this.myList = arr;
  }
  update(index, updatedTodo){
    if(this.myList[index] == undefined) return
    this.myList[index] = updatedTodo;
  }
  getAll(){
    return this.myList;
  }
  get(indexOfTodo){
    if(this.myList[indexOfTodo] == undefined) return null;
    return this.myList[indexOfTodo];
  }
  clear(){
    let cnt = 0 ;
    while(cnt < this.myList.length){
      this.myList.pop();
    }
  }
}


module.exports = Todo;
