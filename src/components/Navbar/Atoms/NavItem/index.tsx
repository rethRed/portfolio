'use client';

import { classNameCustom } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export type NavItemProps = {
    label: string,
    href: string
}

export const NavItem = (props: NavItemProps) => {

    const pathname = usePathname();

    const isActive = pathname === props.href;

    return (
        <Link href={props.href} className={classNameCustom(
            'text-gray-400 flex items-center gap-2 font-medium font-mono',
            isActive && 'text-gray-50'
        )}>
            <span className="text-emerald-400">#</span>
            {props.label}
        </Link>
    )
}