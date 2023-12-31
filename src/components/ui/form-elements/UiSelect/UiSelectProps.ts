import type {FormElementsProps} from "@/components/ui/form-elements/FormElementsProps";

type UiSelectOptions = {
    label: string;
    value: any;
    [key: string]: any;
}
export type UiSelectProps = FormElementsProps & {
    options: UiSelectOptions[];
    placeholder?: string;
    teleported?: boolean;
}