import { EditDataModalProvider } from './edit-data-modal'
export * from './edit-data-modal'

interface ModalProviderProps {
    children: React.ReactNode
}
export const ModalProvider = ({children}: ModalProviderProps) => {
    return (
        <EditDataModalProvider>
            {children}
        </EditDataModalProvider>
    )
}