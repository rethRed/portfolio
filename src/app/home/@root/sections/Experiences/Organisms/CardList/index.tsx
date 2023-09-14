'use client';

import { Card, CardProps } from "../../Molecules"
import { SiNestjs, SiDocker, SiKubernetes } from 'react-icons/si';
import { IoHardwareChipSharp } from 'react-icons/io5'
import { MdCleaningServices, MdNetworkWifi } from 'react-icons/md'
import { motion } from "framer-motion";

export const CardList = () => {

    const cardList: CardProps[] = [
        {
            title: 'Clean Architecture',
            icon: <MdCleaningServices />
        },
        {
            title: 'NestJS',
            icon: <SiNestjs />
        },
        {
            title: 'Docker',
            icon: <SiDocker />
        },
        {
            title: 'Kubernets',
            icon: <SiKubernetes />
        },
        {
            title: 'Micro Services',
            icon: <IoHardwareChipSharp />
        },
        {
            title: 'Websocket',
            icon: <MdNetworkWifi />
        }
    ]

    return (
        <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardList.map((card, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -30, scale: 0 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: index * 0.1
                    }}
                    key={index}>
                    <Card {...card} />
                </motion.div>
            ))}
        </div>
    )
}