export interface NavItemsType {
  text: string
  url: string
  filters?: {
    text: string
    type: "paintings" | "comics" | "digital_art" | "design"
  }[]
  sublinks?: { text: string; url: string }[]
}
