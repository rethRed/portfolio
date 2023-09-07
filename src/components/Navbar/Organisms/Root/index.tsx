import { Container } from "@/components/Container"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const NavbarRoot = (props: Props) => {
    return (
        <header className="flex items-center justify-center py-5">
            <Container {...props} className="flex justify-between" />
        </header>
    )
}