import Link from "next/link"
import { ReactNode } from "react"
import { BiRightArrow } from "react-icons/bi"

type Props = {
    children: ReactNode,
    href: string
}

export const Button = (props: Props) => {
    return (
        <Link href={props.href}>
            <button className="px-8 py-3 bg-indigo-500 rounded-lg font-medium flex items-center justify-start gap-3 hover:bg-indigo-400 transition">
                {props.children}
                <BiRightArrow />
            </button>
        </Link>
    )
}