import Image from "next/image"
import { formatDistanceStrict } from 'date-fns'
import Link from "next/link"

export type CardProps = {
    name: string,
    role: string,
    imageURL: string,
    description: string,
    href: string,
    joinedAt: Date,
    finishAt: Date,
    skills: string[]
}

export const Card = (props: CardProps) => {
    return (
        <>
            <li className="mb-10 ml-10">
                <Link href={props.href} target="_blank" className="absolute flex items-center justify-center -left-[1.35rem] p-1 border-2 rounded-full border-indigo-500 bg-primary">
                    <Image src={props.imageURL} className="w-[30px] h-[30px] rounded-full select-none" width={30} height={30} alt={props.name} />
                </Link>
                <Link href={props.href} target="_blank" className="text-sm font-medium text-gray-500 mb-1">@{props.name}</Link>
                <h2 className="text-lg font-medium text-gray-300 mb-2">{props.role}</h2>
                <p className="text-xs font-medium text-gray-500 mb-2">{props.joinedAt.toLocaleString('en-US', { month: 'short' })} {props.joinedAt.getFullYear()} ○ The moment ○ ({formatDistanceStrict(props.joinedAt, props.finishAt, { unit: 'month' })})</p>
                <p className="text-base font-medium text-gray-300">{props.description}</p>
                <div className="mt-3 flex flex-wrap gap-x-2 gap-y-3 max-w-md">
                    {props.skills.map((skill, index) => (
                        <span className="text-xs p-1 px-2 bg-indigo-900 rounded-lg text-indigo-300 font-bold font-mono" key={index}>{skill}</span>
                    ))}
                </div>
            </li>
        </>
    )
}