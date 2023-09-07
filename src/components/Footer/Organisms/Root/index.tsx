import { Container } from "@/components/Container"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const FooterRoot = (props: Props) => {
    return (
        <section className="py-[5rem] flex items-center justify-center bg-secondary">
            <Container {...props} className="flex flex-col items-center justify-center text-center" />
        </section>
    )
}