/* eslint-disable import/no-unresolved */
import { useContext } from 'react'

import {EditModalContext} from 'context/modal'

export const useTodoEditModal = () => {
    const { openEditDataModal } = useContext(EditModalContext)
    return {
        openEditDataModal
    }
}