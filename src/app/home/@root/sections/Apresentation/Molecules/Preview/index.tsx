import Image from "next/image"

export const Preview = () => {
    return (
        <div>
            <Image
                className="rounded-[50px] h-[350px] w-[350px]"
                src="https://cdn.discordapp.com/attachments/1146267369740714076/1149124032315269240/image.png"
                width={350}
                height={350}
                alt="Wilson Gabriel"
            />
        </div>
    )
}