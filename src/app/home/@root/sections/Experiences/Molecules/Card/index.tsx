import { ReactNode } from "react"

export type CardProps = {
    title: string,
    yearOld: number,
    icon: ReactNode
}

export const Card = (props: CardProps) => {
    return (
        <div className="bg-secondary p-4 rounded-lg flex items-center justify-between">
            <div className="flex flex-col justify-center">
                <p className="text-xs font-medium text-gray-400 font-mono mb-1">{props.title}</p>
                <p className="text-base font-semibold text-gray-400 font-mono">{props.yearOld} year{props.yearOld > 1 && "s"} of experience</p>
            </div>
            <div className="flex items-center justify-end">
                <span className="text-5xl text-indigo-500">{props.icon}</span>
            </div>
        </div>
    )
}