import { motion } from "framer-motion"
import Link from "next/link"

export const Copyright = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: 0.3
            }}
            className="mt-5">
            <p className="font-mono text-gray-400 font-medium">Created with 💗 <Link href="https://danielsv.dev" className="text-emerald-500" target="_blank">Daniel Silva</Link></p>
        </motion.div>
    )
}