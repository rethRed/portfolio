import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <Image
                className="rounded-full"
                src="https://cdn.discordapp.com/attachments/1146267369740714076/1149142905794080840/103064271_1.png"
                width={50}
                height={49}
                alt="Wilson Gabriel"
            />
        </Link>
    )
}