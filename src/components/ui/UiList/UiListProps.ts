export type UiListProps<T> = {
    items: T[];
    keyField: keyof T;
}