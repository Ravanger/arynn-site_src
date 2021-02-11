export interface MainNavItemProps {
  url?: string
  text: string
  external?: boolean
  primary?: boolean
  active?: boolean
  onClick?: () => void
  filter?: boolean
}
