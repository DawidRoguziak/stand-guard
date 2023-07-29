import type IDBDataBaseDefinition from "@/modules/indexDbManager/types/IDBDataBaseFunction.type";
import type {IDBDataBaseFactory} from "@/modules/indexDbManager/types/IDBDataBaseFunction.type";
import type IndexDbUpdateType from "@/modules/indexDbManager/classes/IndexDbUpdate/IndexDbUpdate.type";

export default class IndexDbWrite<DataType, Key extends keyof DataType> implements IDBDataBaseDefinition, IndexDbUpdateType<DataType, Key> {
    storeName: string;
    dbFactory: IDBDataBaseFactory;

    constructor(storeName: string, dbFactory: IDBDataBaseFactory) {
        this.storeName = storeName;
        this.dbFactory = dbFactory;
    }


    update(id: number, data: Omit<Partial<DataType>, Key>): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await this.dbFactory(this.storeName);
            const transaction: IDBTransaction = db.transaction(this.storeName, 'readwrite');
            const store: IDBObjectStore = transaction.objectStore(this.storeName);
            const request: IDBRequest = store.put({id, ...data});
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                if (request.result) {
                    resolve();
                } else {
                    reject(null);
                }
            }
        });
    }


}