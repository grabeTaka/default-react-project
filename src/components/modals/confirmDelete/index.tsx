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

interface ConfirmDeleteProps {
  isOpen: boolean;
  onClose(): void;
  id: number;
}

export const ConfirmDelete = (props: ConfirmDeleteProps) => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const { isOpen, onClose, id } = props

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmação exclusão</ModalHeader>
                <ModalCloseButton mt={1.5} colorScheme="red" color="#dc3545" />

                <ModalBody py={4}>
                    <Text variant="status" fontSize={16}>
                        Tem certeza que deseja excluir?
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
