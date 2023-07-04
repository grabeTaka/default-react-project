/* eslint-disable import/no-unresolved */
import React from 'react'
import { ITodo, TodoContextType } from 'types/todoContext/index'
import { todoContextProps } from './index.d'

export const TodoContext = React.createContext<TodoContextType | null>(null)

const TodoProvider: React.FC<todoContextProps> = ({ children }) => {
    const [todos, setTodos] = React.useState<ITodo[]>([
        {
            id: 1,
            title: 'post 1',
            description: 'this is a description',
            status: false,
        },
        {
            id: 2,
            title: 'post 2',
            description: 'this is a description',
            status: true,
        },
    ])

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const updateTodo = (id: number) => {
        setTodos([])
        console.info('Todo function')
    }

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const saveTodo = (todo: ITodo) => {
        console.info('ToDo function')
    }   

    return (
        <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
