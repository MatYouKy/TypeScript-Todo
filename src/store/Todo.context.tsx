import { createContext, FC, useState } from 'react'
import { Todo } from '../models/todo';

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodos: (id: string) => void;
}
export const TodoContext = createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    removeTodos: (id: string) => {}

});

export const TodosContextProvider: FC = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
      setTodos(prev => prev.concat(newTodo));
    };
  
    const removeTodoHandler = (id: string ) => setTodos(prev => prev.filter(item => item.id !== id));

    const valueContext: TodoContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodos: removeTodoHandler
    }
    return <TodoContext.Provider value={valueContext}>{children}</TodoContext.Provider>
}