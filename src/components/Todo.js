import React from 'react';


const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    // if the element id does not match the todo.id then is gonna get rid of it */

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }))
    }
/* map over the todos state and check if item.id = todo.id comparing is clicked = same id as the one from state
        if that's the case, return the object and pass the property -> switch from false default to completed  */

    return (
        <div className="todo"> 
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text} </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i></button>     
        </div>

    );
}
export default Todo;
/* update ui -> adding ${} and todo.completed can be passed, in case it's true, add the class of completed if not pass nothing. 
    className={`todo-item ${todo.completed ? "completed" : ""}`}
    the html element will toggle based of that piece of state that is modified
    the opacity and the line through is added in css  .completed { text:decoration: line-through}
    which is then set as the class of the DOM node.
    */