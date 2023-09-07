import { Card, CardProps } from "../../Molecules/Card"

export const CardList = () => {

    const cardList: CardProps[] = [
        {
            name: 'Leinad Shop',
            role: 'Desenvolvedor Back-End',
            imageURL: 'https://cdn.discordapp.com/attachments/1146267369740714076/1149238059150356532/131834304.png',
            description: 'Leinad Shop is an e-commerce platform that brings together the buyer and the seller, where the seller registers his product on the platform, discloses the customer to buy and receive it.',
            skills: ['Back-end', 'Typescript', 'Clean-Architecture', 'RabbitMQ', 'MongoDB', 'Mysql', 'Reddis'],
            href: 'https://leinadshop.com.br',
            joinedAt: new Date('2023-01-10'),
            finishAt: new Date()
        },
        {
            name: 'Warp Store',
            role: 'Desenvolvedor Back-End',
            imageURL: 'https://cdn.discordapp.com/attachments/1146267369740714076/1146369372428967976/Main_1.gif',
            description: 'Warp Store is an automated product delivery platform, where the player buys a product and receives it in the game automatically.',
            skills: ['Back-end', 'Typescript', 'Clean-Architecture', 'RabbitMQ', 'MongoDB', 'Mysql', 'Reddis'],
            href: 'https://warpstore.app',
            joinedAt: new Date('2023-09-28'),
            finishAt: new Date()
        },
        {
            name: 'Leinad Store',
            role: 'Desenvolvedor Back-End',
            imageURL: 'https://cdn.discordapp.com/attachments/1146267369740714076/1149239189288800326/logo.png',
            description: 'Leinad Store is an automated product delivery platform, where the player buys a product and receives it in the game automatically.',
            skills: ['Back-end', 'PHP', 'Laravel', 'Mysql'],
            href: 'https://leinad.store',
            joinedAt: new Date('2022-07-10'),
            finishAt: new Date('2022-11-06')
        }
    ]

    return (
        <ol className="relative border-l-2 border-gray-800">
            {cardList.map((card, index) => (
                <Card {...card} key={index} />
            ))}
        </ol>
    )
}