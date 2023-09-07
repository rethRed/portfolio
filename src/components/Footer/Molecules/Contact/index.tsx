import { Textarea, Input, Button } from "../../Atoms"

export const Contact = () => {
    return (
        <form action="" className="max-w-md w-full flex flex-col gap-y-2 items-center justify-center">
            <Input placeholder="Wilson Gabriel" />
            <Input placeholder="example@example.com" />
            <Textarea placeholder="Description" />
            <Button>Submit</Button>
        </form>
    )
}