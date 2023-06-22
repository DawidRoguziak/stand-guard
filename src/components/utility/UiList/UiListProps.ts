export default interface UiListProps<T>{
    items: T[];
    keyField: keyof T;
}