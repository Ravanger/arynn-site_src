export interface LayoutProps {
  children: React.ReactNode
}

export interface NavItemsType {
  text: string
  url: string
  filters?: {
    text: string
    type: "paintings" | "comics" | "digital_art" | "design"
  }[]
  sublinks?: ({ text: string; url: string; external?: boolean } | undefined)[]
}
