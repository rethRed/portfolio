import { Container } from "@/components/Container"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const ProjectsRoot = (props: Props) => {
    return (
        <section className="flex items-center justify-center py-9">
            <Container {...props} />
        </section>
    )
}