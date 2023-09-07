import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLInputElement>

export const Input = (props: Props) => {
    return (
        <input {...props} className="bg-secondary text-gray-400 max-w-full w-full px-4 py-4 rounded-lg border border-transparent focus:border-blue-500 outline-none transition" />
    )
}