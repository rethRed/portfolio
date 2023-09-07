'use client';
import { useForm } from "react-hook-form"
import { Textarea, Input, Button } from "../../Atoms"

export const Contact = () => {

    const { control, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
    });

    return (
        <form onSubmit={onSubmit} className="max-w-md w-full flex flex-col gap-y-2 items-center justify-center">
            <Input type="text" placeholder="Wilson Gabriel" name="name" control={control} />
            <Input type="email" placeholder="example@example.com" name="email" control={control} />
            <Textarea placeholder="Description" name="description" control={control} />
            <Button type="submit">Submit</Button>
        </form>
    )
}