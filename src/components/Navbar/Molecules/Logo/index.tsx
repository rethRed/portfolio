import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/">
            <Image
                src="https://cdn.discordapp.com/attachments/1146267369740714076/1149102358509391922/103064271.png?ex=64fa4878&is=64f8f6f8&hm=602d8babfd539fefd88e7aa51f2d0c77ff53708a004d05d059a748c6abb3ec0e&"
                width={50}
                height={49}
                alt="Wilson Gabriel"
            />
        </Link>
    )
}