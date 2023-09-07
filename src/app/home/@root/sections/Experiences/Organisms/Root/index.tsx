import { Container } from "@/components/Container"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const ExperiencesRoot = (props: Props) => {
    return (
        <section className="flex items-center justify-center">
            <Container {...props} />
        </section>
    )
}