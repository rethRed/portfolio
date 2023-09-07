import { Details } from "../Molecules/Details"
import { Preview } from "../Molecules/Preview"
import { ApresentationRoot } from "../Organisms/Root"

export const Apresentation = () => {
    return (
        <ApresentationRoot>
            <Details />
            <Preview />
        </ApresentationRoot>
    )
}