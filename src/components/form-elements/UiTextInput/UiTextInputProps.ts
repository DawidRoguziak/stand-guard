import type {FormElementsProps} from "@/components/form-elements/FormElementsProps";

export type UiTextInputProps  = FormElementsProps & {
    value?: string;
    type?: 'text' | 'textarea';
    showPassword?: boolean;
}