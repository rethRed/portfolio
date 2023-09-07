import { HtmlHTMLAttributes } from "react"

type Props = HtmlHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
    return (
        <button {...props} className="px-8 py-3 bg-indigo-500 rounded-lg font-medium hover:bg-indigo-400 transition w-full" />
    )
}