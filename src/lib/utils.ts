import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const classNameCustom = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}