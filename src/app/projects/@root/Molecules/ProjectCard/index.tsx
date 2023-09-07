import Image from "next/image"

export type ProjectCardProps = {
    title: string,
    image: string,
    description: string,
    languages: string[]
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="bg-secondary rounded-lg">
            <Image className="rounded-lg rounded-b-none" src={props.image} width={1080} height={1080} alt={props.title} />
            <div className="p-4">
                <p className="text-base font-semibold font-sans mb-2">{props.title}</p>
                <p className="font-sans text-xs text-gray-400 font-medium">{props.description}</p>
                <p className="mt-3 flex items-center justify-start gap-2">
                    {props.languages.map((language, index) => (
                        <span className="text-xs p-1 px-2 bg-indigo-900 rounded-lg text-indigo-300 font-bold font-mono" key={index}>{language}</span>
                    ))}
                </p>
            </div>
        </div>
    )
}