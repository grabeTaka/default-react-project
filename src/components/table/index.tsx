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
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

import { useTodoEditModal } from 'hooks/use-modal/use-table-modal'
import { useConfirmDeleteModal } from 'hooks/use-modal/use-confirm-delete-modal'

const TableComponent: React.FC = () => {
    const { todos = [] } = useTodo()
    const { openEditDataModal } = useTodoEditModal()
    const { openConfirmDeleteModal } = useConfirmDeleteModal()

    return (
        <Flex direction="column" width="100%">
            <TableContainer mt={6}>
                <Table variant="striped" size="md">
                    <Thead>
                        <Tr>
                            <Th>Título</Th>
                            <Th>Descrição</Th>
                            <Th>Status</Th>
                            <Th>Excluir</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {todos.map(todo => (
                            <Tr key={todo.id}>
                                <Td fontWeight="bold">{todo.title}</Td>
                                <Td>{todo.description}</Td>
                                <Td>
                                    {todo.status &&
                                        <EditIcon onClick={() => openEditDataModal(todo)} cursor={'pointer'}/>
                                    }
                                </Td>
                                <Td>
                                    <DeleteIcon onClick={() => openConfirmDeleteModal(todo.id)} cursor={'pointer'}/>
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
