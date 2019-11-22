export default class todoAction {

    constructor(type, todo = null, newTodo = null){
         this.type = type;
         if(newTodo == null) {
             this.todo = todo;
         }
         else {
             this.todo = {prevState: todo, editState: newTodo}
         }

         return {...this};
    }
}