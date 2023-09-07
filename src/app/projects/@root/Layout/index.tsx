import { Header } from "../Molecules"
import { ProjectList, ProjectsRoot } from "../Organisms"

export const ProjectsLayout = () => {
    return (
        <ProjectsRoot>
            <Header />
            <ProjectList />
        </ProjectsRoot>
    )
}