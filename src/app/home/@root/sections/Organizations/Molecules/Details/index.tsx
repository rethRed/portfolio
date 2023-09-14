'use client';
import { motion } from "framer-motion"

export const Details = () => {
    return (
        <div className="mb-[2rem] max-w-md">
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="text-mono text-sm font-semibold text-indigo-400 mb-3">./organizations</motion.p>
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.2,
                }}
                className="font-semibold text-2xl mb-1">My Experiences in Organizations</motion.p>
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.4,
                }}
                className="text-sm font-medium text-gray-400">
                As a pivotal part of the talented team at Warp Store, I&apos;m fully immersed
                in the realm of modern development. Leveraging Docker, clean architecture, and DDD principles,
                I&apos;m crafting solutions that stand the test of time. My toolkit includes Node.js and TypeScript,
                and I ensure the security of the APIs I develop, prioritizing the protection of user data and
                system integrity.
            </motion.p>
        </div>
    )
}//;;