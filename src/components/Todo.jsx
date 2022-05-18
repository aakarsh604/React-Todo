import React from "react";
import {v4 as uuid} from "uuid";
import Todoitem from "./Todoitem";
import styles from "./Todo.module.css"

const Todo = () => {
  const [query, setQuery] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleAdd = () => {
    const payload = {
      value: query,
      status: false,
      id: uuid(),
    };
    setTodos([...todos, payload]);
    setQuery("");
  };

  //On change of input , read the value
  //Store the value

  //on click of add button 
  // Read the stored value and add it my todo list  

  const onDelete = (id) => {
      let newTodos = todos.filter((el) => el.id != id );
      setTodos(newTodos);
  }
  return (
    <div>
      <h1>What do you want to do today ?</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="  ...Add a task"
      />
      <button onClick={handleAdd}>Add</button>

      <div className={styles.todoList}>
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} onDelete={onDelete}/>
      ))}
      </div>

    </div>
  );
};

export default Todo;
