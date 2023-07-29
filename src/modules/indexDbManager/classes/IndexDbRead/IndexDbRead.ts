import type IDBDataBaseDefinition from "@/modules/indexDbManager/types/IDBDataBaseFunction.type";
import type {IDBDataBaseFactory} from "@/modules/indexDbManager/types/IDBDataBaseFunction.type";
import type IndexDbReadType from "@/modules/indexDbManager/classes/IndexDbRead/IndexDbRead.type";

export default class IndexDbRead<DataType, Key extends keyof DataType> implements IDBDataBaseDefinition, IndexDbReadType<DataType, Key> {
    storeName: string;
    dbFactory: IDBDataBaseFactory;

    constructor(storeName: string, dbFactory: IDBDataBaseFactory) {
        this.storeName = storeName;
        this.dbFactory = dbFactory;
    }

    getById(id: number): Promise<DataType | null> {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await this.dbFactory(this.storeName);
            const transaction: IDBTransaction = db.transaction(this.storeName, 'readonly');
            const store: IDBObjectStore = transaction.objectStore(this.storeName);
            const request: IDBRequest = store.get(id);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    reject(null);
                }
            }
        });
    }

    getAll(): Promise<DataType[]> {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await this.dbFactory(this.storeName);
            const transaction: IDBTransaction = db.transaction(this.storeName, 'readonly');
            const store: IDBObjectStore = transaction.objectStore(this.storeName);
            const request: IDBRequest = store.getAll();
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }


    getCount(): Promise<number> {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await this.dbFactory(this.storeName);
            const transaction: IDBTransaction = db.transaction(this.storeName, 'readonly');
            const store: IDBObjectStore = transaction.objectStore(this.storeName);
            const request: IDBRequest = store.count();
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }


    getLastCreatedProfile(): Promise<DataType | null> {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await this.dbFactory(this.storeName);
            const transaction = db.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.openCursor(null, 'prev');
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    resolve(cursor.value);
                } else {
                    reject(null);
                }
            };
        });
    }

}