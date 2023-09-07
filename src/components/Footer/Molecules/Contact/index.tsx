import { Controller, useForm } from "react-hook-form"
import { Textarea, Input, Button, Error } from "../../Atoms"
import { toast } from "react-hot-toast";
import { DescriptionValidator, EmailValidator, NameValidator } from "./validators";

export const Contact = () => {

    const { control, handleSubmit, watch, formState: { errors, isSubmitting }, } = useForm({
        defaultValues: {
            name: '',
            email: '',
            description: ''
        }
    })

    const onSubmit = handleSubmit(async (data) => {
        toast.success('ta aq')
        return
    });

    return (
        <form onSubmit={onSubmit} className="max-w-md w-full flex flex-col gap-y-2 items-start justify-center">
            <Controller
                name="name"
                control={control}
                rules={NameValidator}
                disabled={isSubmitting}
                render={({ field }) => (
                    <Input placeholder="Wilson Gabriel" {...field} />
                )}
            />
            {errors.name && (<Error>{errors.name.message as string}</Error>)}

            <Controller
                name="email"
                control={control}
                rules={EmailValidator}
                disabled={isSubmitting}
                render={({ field }) => (
                    <Input placeholder="example@example.com" {...field} />
                )}
            />
            {errors.email && (<Error>{errors.email.message as string}</Error>)}

            <Controller
                name="description"
                control={control}
                rules={DescriptionValidator}
                disabled={isSubmitting}
                render={({ field }) => (
                    <Textarea placeholder="Description" {...field} />
                )}
            />
            {errors.description && (<Error>{errors.description.message as string}</Error>)}

            <Button loading={isSubmitting}>Submit</Button>
        </form>
    )
}