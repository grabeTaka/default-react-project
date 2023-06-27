/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react'
import { TodoContext } from 'context/todo/index'
import { TodoContextType } from 'types/todoContext/index'

const Table: React.FC = () => {
    const { todos } = React.useContext(TodoContext) as TodoContextType

    useEffect(() => {
    // eslint-disable-next-line no-console
        console.log(todos)
    }, [todos])

    return <div> teste </div>
}

export default Table
