import { StackItem, StackItemProps } from "../../Atoms/StackItem"
import { BiRightArrow } from 'react-icons/bi';

const StackItems: StackItemProps[] = [
    {
        title: 'NestJS'
    },
    {
        title: 'RabbitMQ'
    },
    {
        title: 'Clean ARC'
    },
    {
        title: 'Kubernets'
    },
    {
        title: 'Docker'
    },
    {
        title: 'Kafka'
    },
    {
        title: 'Typescript'
    },
    {
        title: 'C++'
    }
]

export const Details = () => {
    return (
        <div className="lg:max-w-[530px]">
            <p className="font-mono font-semibold text-blue-400 mb-2">👋 Hello friend, my name is</p>
            <p className="text-5xl font-extrabold tracking-wide mb-2">Wilson Gabriel</p>
            <p className="text-1xl text-gray-500 font-semibold font-mono">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error vel nostrum nisi eum vitae doloribus, mollitia suscipit reiciendis iure accusamus ut eligendi necessitatibus harum autem.</p>
            <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[450px] my-5">
                {StackItems.map((stack, index) => (
                    <StackItem key={index} title={stack.title} />
                ))}
            </div>
            <button className="px-8 py-3 bg-blue-400 rounded-lg font-medium flex items-center justify-start gap-3 hover:bg-blue-500 transition group">
                Contact-me
                <span className="p-1 bg-blue-500 rounded-sm transition group-hover:bg-blue-400"><BiRightArrow /></span>
            </button>
        </div>
    )
}