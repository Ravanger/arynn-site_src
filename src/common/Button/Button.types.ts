import { MouseEventHandler } from "react"

export interface ButtonProps {
  type?: "button" | "submit" | "reset"
  onClick?: MouseEventHandler
  disabled?: boolean
  children: React.ReactNode
  className?: string
}
