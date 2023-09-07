import { Container } from "@/components/Container"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const OrganizationsRoot = (props: Props) => {
    return (
        <section className="flex items-center justify-center py-[2rem] mt-[2rem]">
            <Container {...props} />
        </section>
    )
}