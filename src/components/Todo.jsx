import React from "react";
import {v4 as uuid} from "uuid";
import Todoitem from "./Todoitem";
import styles from "./Todo.module.css"
import Input from "./Input";

const Todo = () => {
  const [query, setQuery] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleAdd = () => {
   if ( query ) {
    const payload = {
      value: query,
      status: false,
      id: uuid(),
    };
    setTodos([...todos, payload]);
    setQuery("");
   } else {
     alert("Please type somethi ng!")
   } 
  };

  const onDelete = (id) => {
      let newTodos = todos.filter((el) => el.id != id );
      setTodos(newTodos);
  }

   const completedTodoHandler = (todos)=> {
      const completed = todos.filter((el) => {
        return el.status === false;
      })
      console.log(completed)
   }

  return (
    <div className={styles.main}>
      <h1 style={{color: "white", padding:"20px 0px 0px 0px"}}>What do you want to do today ?</h1>
        <Input query={query} setQuery={setQuery} handleAdd={handleAdd}/>
      <div className={styles.todoList}>
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} onDelete={onDelete}/>
      ))}
      </div>
      <button className={styles.completed} onClick={() => completedTodoHandler(todos)}>Show Incomplet Tasks</button>

    </div>
  );
};

export default Todo;
