import { FieldValues, RegisterOptions } from "react-hook-form";

export const NameValidator: RegisterOptions<FieldValues, string> = {
    required: { value: true, message: 'Name is required' }
}