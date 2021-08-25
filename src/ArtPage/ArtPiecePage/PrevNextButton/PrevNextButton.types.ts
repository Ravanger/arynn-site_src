import { UrlObject } from "url"

export interface PrevNextButtonProps {
  type: "PREV" | "NEXT"
  href: string | UrlObject
  className?: string
}
