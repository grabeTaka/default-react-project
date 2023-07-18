/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-unresolved */
import { createContext, useCallback, useState } from 'react'
import { ITodo } from 'types/todoContext'
import {TodoModal} from 'components/modals/todo/index'
interface editDataModalContextData {
  // eslint-disable-next-line no-unused-vars
  openEditDataModal: (data: ITodo) => void
}

const EditModalContext = createContext<editDataModalContextData>({} as editDataModalContextData)

interface EditDataModalProviderProps {
  children: React.ReactNode;
}

const EditDataModalProvider = ({
    children,
}: EditDataModalProviderProps) => {
    const [open, setOpen] = useState(false)
    const [todo, setTodo] = useState({} as ITodo) 

    const openEditDataModal = useCallback((value: ITodo) => {
        console.info('teste')
        setTodo(value)
        setOpen(true)
    }, [])

    return (
        <EditModalContext.Provider value={{ openEditDataModal }}>
            {children}
            <TodoModal
                isOpen={open}
                onClose={() => setOpen(false)}
                todo={todo}
            />
        </EditModalContext.Provider>
    )
}

export { EditDataModalProvider, EditModalContext }
