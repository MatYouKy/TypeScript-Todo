import { FC } from "react";
import classes from './TodoItem.module.css';

export const TodoItem:FC<{ text: string; removeTodos: ()=> void; }> = ({text, removeTodos}) => <li onClick={removeTodos} className={classes.item}>{text}</li>
