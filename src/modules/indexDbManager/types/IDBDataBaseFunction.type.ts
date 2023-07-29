export type IDBDataBaseFactory = (storeName: string) => Promise<IDBDatabase>

export default interface IDBDataBaseDefinition {
    dbFactory: IDBDataBaseFactory;
    storeName: string;
}