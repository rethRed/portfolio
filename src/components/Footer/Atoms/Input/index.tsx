import { InputHTMLAttributes, forwardRef } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <input type="text" {...props} className="bg-primary font-mono text-gray-400 max-w-full w-full px-4 py-4 rounded-lg border border-transparent focus:border-indigo-500 outline-none transition disabled:opacity-60 disabled:cursor-not-allowed" />
    )
});

Input.displayName = "Input"

export default Input