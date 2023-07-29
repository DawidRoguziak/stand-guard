import {APP_DB_NAME} from "@/constants/constants";

export default async function (storeName: string): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(APP_DB_NAME, 1);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        request.onupgradeneeded = event => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, {keyPath: 'id', autoIncrement: true});
            }
        };
    });
}