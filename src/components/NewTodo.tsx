import { FC, FormEvent, useContext, useRef } from "react";
import classes from '../components/NewTodo.module.css'
import { TodoContext } from "../store/Todo.context";

export const NewTodo: FC = () => {
  const { addTodo } = useContext(TodoContext)
  const inputValueRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const entryText = inputValueRef.current!.value;

    if(entryText?.trim().length === 0) return;

    addTodo(entryText);
    inputValueRef.current!.value = '';
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="new-todo">Todo text</label>
        <input type="text" id="new-todo" ref={inputValueRef}/>
        <button type="submit">Add Todo</button>
    </form>
  );
};