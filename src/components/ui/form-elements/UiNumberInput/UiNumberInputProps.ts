import type {FormElementsProps} from "@/components/ui/form-elements/FormElementsProps";

export type UiNumberInputProps = FormElementsProps & {
    value?: number;
    showPassword?: boolean;
    controlsPosition?: 'left' | 'right';
    min?: number;
    max?: number;
}