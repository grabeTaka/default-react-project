/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-unresolved */
import { createContext, useCallback, useState } from 'react'
import {ConfirmDelete} from 'components/modals/confirmDelete/index'
interface ConfirmDeleteModalContextData {
  // eslint-disable-next-line no-unused-vars
  openConfirmDeleteModal: (data: number) => void
}

const ConfirmDeleteModalContext = createContext<ConfirmDeleteModalContextData>({} as ConfirmDeleteModalContextData)

interface ConfirmDeleteProviderProps {
  children: React.ReactNode;
}

const ConfirmDeleteModalProvider = ({
    children,
}: ConfirmDeleteProviderProps) => {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState<number>(0)

    const openConfirmDeleteModal = useCallback((value: number) => {
        console.info('teste')
        setId(value)
        setOpen(true)
    }, [])

    return (
        <ConfirmDeleteModalContext.Provider value={{ openConfirmDeleteModal }}>
            {children}
            <ConfirmDelete
                isOpen={open}
                onClose={() => setOpen(false)}
                id={id}
            />
        </ConfirmDeleteModalContext.Provider>
    )
}

export { ConfirmDeleteModalProvider, ConfirmDeleteModalContext }
