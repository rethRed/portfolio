import { classNameCustom } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react"

type Props = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

export const Container = (props: Props) => {
    const { className, ...otherProps } = props;

    return (
        <div className={classNameCustom('container px-5', className)} {...otherProps} />
    )
}