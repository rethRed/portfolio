import { Card, CardProps } from "../../Molecules"
import { FaHtml5 } from 'react-icons/fa'

export const CardList = () => {

    const cardList: CardProps[] = [
        {
            title: 'HTML5',
            icon: <FaHtml5 />,
            yearOld: 2
        },
        {
            title: 'HTML5',
            icon: <FaHtml5 />,
            yearOld: 2
        },
        {
            title: 'HTML5',
            icon: <FaHtml5 />,
            yearOld: 2
        },
        {
            title: 'HTML5',
            icon: <FaHtml5 />,
            yearOld: 2
        },
        {
            title: 'HTML5',
            icon: <FaHtml5 />,
            yearOld: 2
        },
        {
            title: 'HTML5',
            icon: <FaHtml5 />,
            yearOld: 2
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-4">
            {cardList.map((card, index) => {
                return (<Card {...card} key={index} />)
            })}
        </div>
    )
}