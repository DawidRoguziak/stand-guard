import {APP_DB_NAME} from "@/constants/constants";

export const DB_STORE_NAME_PROFILE = 'profiles';

export default async function (): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(APP_DB_NAME, 1);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        request.onupgradeneeded = event => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(DB_STORE_NAME_PROFILE)) {
                db.createObjectStore(DB_STORE_NAME_PROFILE, {keyPath: 'id', autoIncrement: true});
            }
        };
    });
}