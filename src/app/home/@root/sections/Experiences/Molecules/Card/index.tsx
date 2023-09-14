import { ReactNode } from "react"

export type CardProps = {
    title: string,
    icon: ReactNode
}

export const Card = (props: CardProps) => {
    return (
        <div className="w-full bg-secondary p-4 rounded-lg flex items-center justify-between gap-3">
            <div className="flex flex-col justify-center">
                <p className="text-lg font-semibold  font-mono text-gray-400">{props.title}</p>
            </div>
            <div className="flex items-center justify-end">
                <span className="text-5xl text-indigo-500">{props.icon}</span>
            </div>
        </div>
    )
}