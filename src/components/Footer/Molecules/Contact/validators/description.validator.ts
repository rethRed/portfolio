import { FieldValues, RegisterOptions } from "react-hook-form";

export const DescriptionValidator: RegisterOptions<FieldValues, string> = {
    required: { value: true, message: 'Description is required' },
    minLength: {
        value: 1,
        message: 'The description address length is invalid'
    },
    maxLength: {
        value: 1024,
        message: 'The maximum length of the description address is 1024 characters'
    }
}