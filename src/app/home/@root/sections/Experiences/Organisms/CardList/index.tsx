import { Card, CardProps } from "../../Molecules"
import { FaHtml5 } from 'react-icons/fa'
import { SiTypescript, SiNestjs, SiDocker, SiKubernetes } from 'react-icons/si';
import { IoHardwareChipSharp } from 'react-icons/io5'
import { MdCleaningServices, MdNetworkWifi } from 'react-icons/md'

export const CardList = () => {

    const cardList: CardProps[] = [
        {
            title: 'Clean Architecture',
            icon: <MdCleaningServices />,
            yearOld: 2
        },
        {
            title: 'NestJS',
            icon: <SiNestjs />,
            yearOld: 2
        },
        {
            title: 'Docker',
            icon: <SiDocker />,
            yearOld: 3
        },
        {
            title: 'Kubernets',
            icon: <SiKubernetes />,
            yearOld: 1
        },
        {
            title: 'Micro Services',
            icon: <IoHardwareChipSharp />,
            yearOld: 2
        },
        {
            title: 'Websocket',
            icon: <MdNetworkWifi />,
            yearOld: 2
        }
    ]

    return (
        <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardList.map((card, index) => {
                return (<Card {...card} key={index} />)
            })}
        </div>
    )
}