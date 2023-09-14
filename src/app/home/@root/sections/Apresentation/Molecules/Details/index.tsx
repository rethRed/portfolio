'use client';

import { motion } from "framer-motion";
import { Button } from "../../Atoms/Button";
import { StackItem, StackItemProps } from "../../Atoms/StackItem"

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
            <p className="font-mono font-semibold text-indigo-400 mb-2">👋 Hello friend, my name is</p>
            <p className="md:text-5xl text-4xl font-extrabold tracking-wide mb-2">Wilson Gabriel</p>
            <p className="text-1xl text-gray-500 font-semibold font-mono">
                My name is Wilson Gabriel, and I am a backend developer with knowledge in software architecture
                (Clean Architecture and DDD). Passionate about developing concise solutions and always
                willing to learn more and contribute.
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-5 lg:max-w-[450px] my-5">
                {StackItems.map((stack, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: index * 0.1,
                        }}
                        key={index}
                    >
                        <StackItem title={stack.title} />
                    </motion.div>
                ))}
            </div>
            <Button href="/">Contact-me</Button>
        </div>
    )
}