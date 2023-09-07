import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type Props = {
    name: string,
    email: string,
    description: string
}

export const SendDiscordService = async (props: Props) => {
    const formatMessageCard = (message: string) => {
        return `${'`'.repeat(3)}${message}${'`'.repeat(3)}`
    }

    const request = await axios.post(process.env.DISCORD_API_WEBHOOK!, {
        content: '||@everyone||',
        embeds: [
            {
                title: '`💙` New message from portfolio',
                description: `**\`🧑\` Name:** ${formatMessageCard(props.email)}\n**\`📩\` Email**:${formatMessageCard(props.email)}\n**\`📝\` Description:**${formatMessageCard(props.description)}`,
            }
        ]
    }, {
        validateStatus: () => true
    })

    return request
}