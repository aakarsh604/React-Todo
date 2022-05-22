import React from 'react';
import styles from "./Todo.module.css"

const Input = ({handleAdd, query, setQuery}) => {
  return (
    <div className={styles.inputmaindiv}>
    <input
      className={styles.inputdiv}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="...Add a task 📝"
      />
      <button className={styles.inputbtn} onClick={handleAdd}>+</button>
    </div>
  )
}

export default Input