/* eslint-disable import/no-unresolved */
import React from 'react'
import {useTodo} from 'hooks/todo/use-todo'
import {
    Flex,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { useTodoEditModal } from 'hooks/use-modal'

const TableComponent: React.FC = () => {
    const { todos = [] } = useTodo()
    const { openEditDataModal } = useTodoEditModal()

    return (
        <Flex direction="column" width="100%">
            <TableContainer mt={6}>
                <Table variant="striped" size="md">
                    <Thead>
                        <Tr>
                            <Th>Título</Th>
                            <Th>Descrição</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {todos.map(todo => (
                            <Tr key={todo.id}>
                                <Td fontWeight="bold">{todo.title}</Td>
                                <Td>{todo.description}</Td>
                                <Td>
                                    {todo.status &&
                                        <span onClick={() => openEditDataModal(todo)}> Config </span>
                                    }
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}

export default TableComponent
