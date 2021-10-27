import { useState, useEffect } from "react";
import axios from "axios";

import Tasks from "./Tasks/Tasks";

import styles from "./ToDo.module.scss";

const ToDo = () => {
  const [listTask, setListTask] = useState(null);
  const [textInput, setTextInput] = useState('');

  const onCompleted = (completed, id) => {
    const newList = listTask.filter((item) => {
      if (item.id === id) {
        item.completed = !completed;
      }
      return item;
    });
    setListTask(newList);
    axios.patch("http://localhost:3001/tasks/" + id, {
      completed: !completed,
    });
  };

  const onChangeText = (e) => {
    setTextInput(e.target.value);
  };

  const onAddTask = () => {
    if (textInput) {
      axios
        .post("http://localhost:3001/tasks", {
          text: textInput,
          completed: false,
        })
        .then(({ data }) => {
          console.log(data);
          const obj = {
            ...data,
          };
          const newList = [...listTask, obj];
          setListTask(newList);
        })
        .catch(() => {
          alert("Не удалось добавить задачу!");
        })
        .finally(() => {
          setTextInput("");
        });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then(({ data }) => {
      setListTask(data);
    });
  }, []);

  const onRemove = (id) => {
    const newList = listTask.filter((item) => item.id !== id);
    setListTask(newList);
    axios.delete("http://localhost:3001/tasks/" + id).catch(() => {
      alert("Не удалось удалить задачу");
    });
  };

  return (
    <div className={styles.header}>
      <h1>ToDo</h1>

      <div>
        <ul className={styles.tasks}>
          {listTask &&
            listTask.map((item) => (
              <Tasks
                key={item.id}
                item={item}
                onCompleted={onCompleted}
                onRemove={onRemove}
              />
            ))}
        </ul>

        <div className={styles.boxInput}>
          <h4 className={styles.changeText}>{textInput}</h4>
          <input
            placeholder="Ввод задачи"
            className={styles.textInput}
            onChange={onChangeText}
            value={textInput}
          />
          <button className={styles.button} onClick={onAddTask}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
