/* eslint-disable import/no-unresolved */
import { useContext } from 'react'
import { TodoContext } from 'context/todo/index'

export const useTodo = () => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error('You must use useTodo hook inside the useTodoProvider')
    }

    return context
}