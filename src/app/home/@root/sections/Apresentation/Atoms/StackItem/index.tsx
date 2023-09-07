export type StackItemProps = {
    title: string
}

export const StackItem = (props: StackItemProps) => {
    return (
        <span className="select-none py-2 px-3 text-sm bg-indigo-950 font-mono text-indigo-300 rounded-lg">{props.title}</span>
    )
}