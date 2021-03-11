import { MouseEventHandler } from "react"

export interface ButtonProps {
  type?: "button" | "submit" | "reset"
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className?: string
}
