import React from 'react'
import styles from "./Todo.module.css"

const Todoitem = ({todo, onDelete}) => {

    const [status, setStatus] = React.useState(todo.status);

  return (
    <div  className={styles.todo}  key={todo.id}>
        <div className={styles.checke}>
                <input type="checkbox" checkbox={status} onChange={ (e)=> {
                console.log(e.target.checked);
                return setStatus(e.target.checked)
            }}/>
            <div className={status? styles.striked : "" }>{todo.value}</div>
        </div>
    <button onClick={()=> onDelete(todo.id)}>Remove</button>
  </div>
  )
}

export default Todoitem