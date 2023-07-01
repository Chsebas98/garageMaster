import { ReactNode } from "react"
import { Header } from "../components/Header"

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}:LayoutProps) => {
    return (
        <>
         <Header />
        {children}
        </>
       
    )
}