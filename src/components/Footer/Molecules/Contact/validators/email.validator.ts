import { FieldValues, RegisterOptions } from "react-hook-form";

export const EmailValidator: RegisterOptions<FieldValues, string> = {
    required: { value: true, message: 'Email is required' },
    minLength: {
        value: 6,
        message: 'The email address length is invalid'
    },
    maxLength: {
        value: 255,
        message: 'The maximum length of the email address is 255 characters'
    },
    pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Fill in a correct email address'
    }
}