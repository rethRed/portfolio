import { Logo } from "../Molecules/Logo"
import { Nav } from "../Molecules/Nav"
import { NavbarRoot } from "../Organisms/Root"

export const Navbar = () => {
    return (
        <NavbarRoot>
            <Logo />
            <Nav />
        </NavbarRoot>
    )
}