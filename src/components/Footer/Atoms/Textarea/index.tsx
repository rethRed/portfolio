import { HTMLAttributes, TextareaHTMLAttributes } from "react"
import { UseControllerProps, useController } from "react-hook-form"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & UseControllerProps

export const Textarea = (props: Props) => {
    const { field } = useController(props)

    return (
        <textarea {...props} {...field} className="bg-secondary text-gray-400 max-w-full w-full px-4 py-4 rounded-lg border border-transparent focus:border-indigo-500 outline-none transition" />
    )
}