import { Container } from "@/components/Container"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const ApresentationRoot = (props: Props) => {
    return (
        <section className="flex justify-center items-center h-auto py-20 lg:py-0 bg-hero-image bg-cover bg-center bg-no-repeat lg:h-[90vh]">
            <Container {...props} className="flex items-center justify-between flex-col-reverse lg:flex-row" />
        </section>
    )
}