/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { InputHTMLAttributes, ReactNode } from 'react'

export interface todoContextProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}
