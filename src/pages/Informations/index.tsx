/* eslint-disable import/no-unresolved */
import React from 'react'
import TableComponent from '../../components/table/index'
import TodoProvider from '../../context/todo/index'
const Table: React.FC = () => {
    return (
        <TodoProvider>
            <TableComponent />
        </TodoProvider>
    )
}

export default Table
