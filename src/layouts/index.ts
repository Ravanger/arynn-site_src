import { NextPage } from "next"
import MainLayout, { getLayout } from "./MainLayout/MainLayout"

type PageWithMainLayoutType = NextPage & { getLayout: typeof getLayout }

export type PageWithLayoutType = PageWithMainLayoutType

export default MainLayout
