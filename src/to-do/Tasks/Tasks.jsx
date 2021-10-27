import React from "react";
import remove from ".././img/remove.svg";
import styles from "./../ToDo.module.scss";
export default function Tasks({ item, onCompleted, onRemove }) {
  return (
    <li>
      <h3 className={styles.task}>
        <input
          className={styles.checked}
          onChange={() => onCompleted(item.completed, item.id)}
          checked={item.completed}
          type="checkbox"
        />
        {item.text}{" "}
        <img
          className={styles.remove}
          onClick={() => onRemove(item.id)}
          src={remove}
          alt="remove"
        />
      </h3>
    </li>
  );
}
