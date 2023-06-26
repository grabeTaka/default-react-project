/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContextSelector } from 'use-context-selector'
import { TodoContext } from '../../context/todo/index'

export function useTodoContext(selector: (value: any) => any) {
    return useContextSelector(TodoContext, selector)
}
