import type FormElementsProps from "@/components/form-elements/FormElementsProps";

type UiSelectOptions = {
    label: string;
    value: any;
}
export default interface UiSelectProps extends FormElementsProps {
    options: UiSelectOptions[];
    placeholder?: string;
}