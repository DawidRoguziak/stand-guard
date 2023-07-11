import type {FormElementsProps} from "@/components/ui/form-elements/FormElementsProps";

export type UiTextInputProps  = FormElementsProps & {
    value?: string;
    type?: 'text' | 'textarea';
    showPassword?: boolean;
}