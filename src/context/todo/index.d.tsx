import { InputHTMLAttributes, ReactNode } from 'react'

export interface todoContextProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}
