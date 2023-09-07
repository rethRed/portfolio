import Image from "next/image"

export const Preview = () => {
    return (
        <div>
            <Image
                className="rounded-full mb-12 lg:mb-0 h-auto w-[320px] lg:h-[400px] lg:w-[400px] lg:rounded-[50px]"
                src="https://cdn.discordapp.com/attachments/1146267369740714076/1149142905794080840/103064271_1.png"
                width={350}
                height={350}
                alt="Wilson Gabriel"
            />
        </div>
    )
}