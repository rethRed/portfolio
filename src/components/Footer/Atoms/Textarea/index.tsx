import { TextareaHTMLAttributes, forwardRef } from "react"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <textarea {...props} className="bg-primary text-gray-400 max-w-full w-full px-4 py-4 rounded-lg border border-transparent focus:border-indigo-500 outline-none transition disabled:opacity-60 disabled:cursor-not-allowed" />
    )
});

Textarea.displayName = "Textarea"

export default Textarea