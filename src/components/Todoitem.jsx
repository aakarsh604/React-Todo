import React from "react";
import styles from "./Todo.module.css";

const Todoitem = ({ todo, onDelete }) => {
  const [status, setStatus] = React.useState(todo.status);

  return (
    <div className={styles.todo} key={todo.id}>
      <div className={styles.checke}>
        <input
        className={styles.checkedinp}
          type="checkbox"
          checked={status}
          onChange={(e) => {
            console.log(status);
            setStatus(e.target.checked);
          }}
        />
        <div className={status ? styles.striked : ""}>{todo.value}</div>
      </div>
      <div onClick={() => onDelete(todo.id)}><i className="fa-regular fa-trash-can icon"></i></div>
    </div>
    
  );
};

export default Todoitem;
