import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Error = (props: Props) => {
    return (
        <small className="-mt-1 -mb-1 text-sm text-red-500 font-medium font-mono text-left" {...props} />
    )
}