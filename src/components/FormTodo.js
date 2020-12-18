import React from 'react'

const FormTodo = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {   // with a simplify version without using props -> const FormTodo = ({})
         setInputText(e.target.value);  // with e.target.value -> get the value of the input {inputText}
                                        
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Date.now()}
        ]);
        setInputText("");               
    };         
    /* ...todos, -> find and pass all todos, defined like: {text: inputText, completed: false, id: Date.now()}
                    setInputText(""); will reset to empty
                    for the UI to update with the state -> add a value={inputText}  */
                                     
    const statusHandler = (e) => {
        setStatus(e.target.value);

    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" id="" className="filter-todo">
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default FormTodo