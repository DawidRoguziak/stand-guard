import type {FormElementsProps} from "@/components/ui/form-elements/FormElementsProps";

type UiSelectOptions = {
    label: string;
    value: any;
}
export type UiSelectProps = FormElementsProps & {
    options: UiSelectOptions[];
    placeholder?: string;
}