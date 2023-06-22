import type FormElementsProps from "@/components/form-elements/FormElementsProps";

export default interface UiTextInputProps extends FormElementsProps {
    value?: string;
    type?: 'text' | 'textarea';
    showPassword?: boolean;
}