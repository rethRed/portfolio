'use client';

import { motion } from "framer-motion"

export const Header = () => {
    return (
        <header className="mb-[2rem]">
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                }}
                className="font-mono text-md text-blue-500 mb-2">./contact</motion.p>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.1
                }}
                className="text-3xl font-medium font-roboto">Let{"'"}s work together?<br />Talk to me</motion.p>
        </header>
    )
}