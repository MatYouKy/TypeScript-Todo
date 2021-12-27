import { FC, useContext } from "react";
import { TodoContext } from "../store/Todo.context";
import { TodoItem } from "./TodoItem";
import classes from './Todos.module.css';

export const Todos:FC = () => {
  const { items, removeTodos } = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
        {items.map(item => <TodoItem key={`${item.id}-${item.text}`} text={item.text} removeTodos={removeTodos.bind(null, item.id)}/>)}
    </ul>
  );
};