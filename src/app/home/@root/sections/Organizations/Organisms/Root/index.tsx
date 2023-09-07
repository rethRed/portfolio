import { Container } from "@/components/Container"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const OrganizationsRoot = (props: Props) => {
    return (
        <section className="flex items-center justify-center py-[2rem] mt-[2rem]">
            <Container {...props} className="flex flex-col items-start justify-start gap-x-[8rem] lg:flex-row" />
        </section>
    )
}