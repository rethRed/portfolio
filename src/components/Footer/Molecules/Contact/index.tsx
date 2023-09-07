import { Controller, useForm } from "react-hook-form"
import { Textarea, Input, Button, Error } from "../../Atoms"
import { toast } from "react-hot-toast";
import { DescriptionValidator, EmailValidator, NameValidator } from "./validators";
import { SendDiscordService } from "./services/send-discord.service";

export const Contact = () => {

    const { control, handleSubmit, watch, formState: { errors, isLoading, isSubmitting }, } = useForm({
        defaultValues: {
            name: 'asdasdasd',
            email: '',
            description: ''
        }
    })

    const onSubmit = handleSubmit(async (data) => {
        const request = await SendDiscordService({
            ...data
        })
        console.log(request.data)
    });

    return (
        <form onSubmit={onSubmit} className="max-w-md w-full flex flex-col gap-y-2 items-start justify-center">
            <Controller
                name="name"
                control={control}
                rules={NameValidator}
                render={({ field }) => (
                    <Input placeholder="Wilson Gabriel" {...field} disabled={isSubmitting} />
                )}
            />
            {errors.name && (<Error>{errors.name.message as string}</Error>)}

            <Controller
                name="email"
                control={control}
                rules={EmailValidator}
                render={({ field }) => (
                    <Input placeholder="example@example.com" {...field} disabled={isSubmitting} />
                )}
            />
            {errors.email && (<Error>{errors.email.message as string}</Error>)}

            <Controller
                name="description"
                control={control}
                rules={DescriptionValidator}
                render={({ field }) => (
                    <Textarea placeholder="Description" {...field} disabled={isSubmitting} />
                )}
            />
            {errors.description && (<Error>{errors.description.message as string}</Error>)}

            <Button loading={isSubmitting}>Submit</Button>
        </form>
    )
}