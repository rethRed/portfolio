import { Details } from "../Molecules"
import { OrganizationsRoot } from "../Organisms"
import { CardList } from "../Organisms/CardList"

export const Organizations = () => {
    return (
        <OrganizationsRoot>
            <Details />
            <CardList />
        </OrganizationsRoot>
    )
}