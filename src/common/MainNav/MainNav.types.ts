export interface NavItemsType {
  text: string
  url: string
  filters?: { text: string }[]
  sublinks?: { text: string; url: string }[]
}
