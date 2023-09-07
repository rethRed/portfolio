import { Container } from "@/components/Container"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const ApresentationRoot = (props: Props) => {
    return (
        <section className="flex justify-center items-center h-[90vh] bg-hero-image bg-cover bg-center bg-no-repeat">
            <Container {...props} className="flex items-center justify-between flex-col-reverse lg:flex-row" />
        </section>
    )
}