import { NavItem, NavItemProps } from "../../Atoms/NavItem"

const NAV_ITEMS: NavItemProps[] = [
    {
        label: 'Inicio',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
]

export const Nav = () => {
    return (
        <nav className="flex items-center justify-center gap-4">
            {NAV_ITEMS.map(navItem => (
                <NavItem {...navItem} />
            ))}
        </nav>
    )
}