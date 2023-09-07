import { useForm } from "react-hook-form"
import { Textarea, Input, Button, Error } from "../../Atoms"
import { toast } from "react-hot-toast";
import { DescriptionValidator, EmailValidator, NameValidator } from "./validators";

export const Contact = () => {

    const { control, handleSubmit, watch, formState: { errors, isSubmitting }, } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        await fetch('http://yooyoy.com')
        return
    });

    return (
        <form onSubmit={onSubmit} className="max-w-md w-full flex flex-col gap-y-2 items-start justify-center">
            <Input placeholder="Wilson Gabriel" name="name" disabled={isSubmitting} control={control} rules={NameValidator} />
            {errors.name && (<Error>{errors.name.message as string}</Error>)}

            <Input placeholder="example@example.com" name="email" disabled={isSubmitting} control={control} rules={EmailValidator} />
            {errors.email && (<Error>{errors.email.message as string}</Error>)}

            <Textarea placeholder="Description" name="description" disabled={isSubmitting} control={control} rules={DescriptionValidator} />
            {errors.description && (<Error>{errors.description.message as string}</Error>)}

            <Button type="submit" loading={isSubmitting}>Submit</Button>
        </form>
    )
}