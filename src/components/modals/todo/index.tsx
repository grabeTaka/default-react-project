import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
} from '@chakra-ui/react'
// eslint-disable-next-line import/no-unresolved
import { ITodo } from 'types/todoContext'
interface todoModalProps {
  isOpen: boolean;
  onClose(): void;
  todo: ITodo;
}

export const TodoModal = (props: todoModalProps) => {
    const { isOpen, onClose, todo } = props

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal todo</ModalHeader>
                <ModalCloseButton mt={1.5} colorScheme="red" color="#dc3545" />

                <ModalBody py={4}>
                    <Text variant="status" fontSize={16}>
                        teste {todo.description}
                    </Text>
                </ModalBody>

                <ModalFooter justifyContent="space-between">
                    <Button size="sm" onClick={onClose} colorScheme="red" variant="ghost">
                        Cancelar
                    </Button>
                    <Button
                        size="sm"
                        colorScheme="green"
                        onClick={() => console.info('feat')}
                    >
                        Sim, confirmar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
