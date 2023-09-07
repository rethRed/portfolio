import { ProjectCard, ProjectCardProps } from "../../Molecules"

export const ProjectList = () => {

    const projectList: ProjectCardProps[] = [
        {
            title: 'Leinad Shop',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148553057014120478/image.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore dolore enim sint voluptatum architecto?',
            languages: ['Javascript', 'Typescript', 'NestJS']
        },
        {
            title: 'Leinad Shop',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148553057014120478/image.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore dolore enim sint voluptatum architecto?',
            languages: ['Javascript', 'Typescript', 'NestJS']
        },
        {
            title: 'Leinad Shop',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148553057014120478/image.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore dolore enim sint voluptatum architecto?',
            languages: ['Javascript', 'Typescript', 'NestJS']
        },
        {
            title: 'Leinad Shop',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148553057014120478/image.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore dolore enim sint voluptatum architecto?',
            languages: ['Javascript', 'Typescript', 'NestJS']
        },
        {
            title: 'Leinad Shop',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148553057014120478/image.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore dolore enim sint voluptatum architecto?',
            languages: ['Javascript', 'Typescript', 'NestJS']
        },
        {
            title: 'Leinad Shop',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148553057014120478/image.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore dolore enim sint voluptatum architecto?',
            languages: ['Javascript', 'Typescript', 'NestJS']
        },
        {
            title: 'Leinad Shop',
            image: 'https://cdn.discordapp.com/attachments/1146267369740714076/1148553057014120478/image.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore dolore enim sint voluptatum architecto?',
            languages: ['Javascript', 'Typescript', 'NestJS']
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-4">
            {projectList.map((project, index) => (
                <ProjectCard {...project} key={index} />
            ))}
        </div>
    )
}