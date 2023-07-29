import type IDBDataBaseDefinition from "@/modules/indexDbManager/types/IDBDataBaseFunction.type";
import type {IDBDataBaseFactory} from "@/modules/indexDbManager/types/IDBDataBaseFunction.type";
import type IndexDbWriteType from "@/modules/indexDbManager/classes/IndexDbWrite/IndexDbWrite.type";

export default class IndexDbWrite<DataType, Key extends keyof DataType> implements IDBDataBaseDefinition, IndexDbWriteType<DataType, Key> {
    storeName: string;
    dbFactory: IDBDataBaseFactory;

    constructor(storeName: string, dbFactory: IDBDataBaseFactory) {
        this.storeName = storeName;
        this.dbFactory = dbFactory;
    }


    write(data: Omit<DataType, Key>): Promise<number | Error> {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await this.dbFactory(this.storeName);
            const transaction: IDBTransaction = db.transaction(this.storeName, 'readwrite');
            const store: IDBObjectStore = transaction.objectStore(this.storeName);
            const request: IDBRequest = store.add(data);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }


}