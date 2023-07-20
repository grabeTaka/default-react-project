/* eslint-disable import/no-unresolved */
import { useContext } from 'react'

import {ConfirmDeleteModalContext} from 'context/modal'

export const useConfirmDeleteModal = () => {
    const { openConfirmDeleteModal } = useContext(ConfirmDeleteModalContext)
    return {
        openConfirmDeleteModal
    }
}