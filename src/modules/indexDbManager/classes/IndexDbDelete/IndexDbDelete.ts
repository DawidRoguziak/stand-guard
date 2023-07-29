import type IDBDataBaseDefinition from "@/modules/indexDbManager/types/IDBDataBaseFunction.type";
import type {IDBDataBaseFactory} from "@/modules/indexDbManager/types/IDBDataBaseFunction.type";
import type IndexDbDeleteType from "@/modules/indexDbManager/classes/IndexDbDelete/IndexDbDelete.type";

export default class IndexDbDelete implements IDBDataBaseDefinition, IndexDbDeleteType {
    storeName: string;
    dbFactory: IDBDataBaseFactory;

    constructor(storeName: string, dbFactory: IDBDataBaseFactory) {
        this.storeName = storeName;
        this.dbFactory = dbFactory;
    }

    deleteById(id: number): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await this.dbFactory(this.storeName);
            const transaction: IDBTransaction = db.transaction(this.storeName, 'readwrite');
            const store: IDBObjectStore = transaction.objectStore(this.storeName);
            const request: IDBRequest = store.delete(id);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }

    deleteAll(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await this.dbFactory(this.storeName);
            const transaction: IDBTransaction = db.transaction(this.storeName, 'readwrite');
            const store: IDBObjectStore = transaction.objectStore(this.storeName);
            const request: IDBRequest = store.clear();
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }




}