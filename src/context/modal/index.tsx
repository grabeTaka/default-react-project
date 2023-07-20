import { EditDataModalProvider } from './edit-data-modal'
import { ConfirmDeleteModalProvider } from './confirm-delete-modal'
export * from './edit-data-modal'
export * from './confirm-delete-modal'

interface ModalProviderProps {
    children: React.ReactNode
}
export const ModalProvider = ({children}: ModalProviderProps) => {
    return (
        <EditDataModalProvider>
            <ConfirmDeleteModalProvider>
                {children}
            </ConfirmDeleteModalProvider>
        </EditDataModalProvider>
    )
}