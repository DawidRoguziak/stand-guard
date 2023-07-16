import {defineStore} from "pinia";
import ProfileDb, {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ProfileDb";
import type {
    StoreProfileDbDelete,
} from "@/modules/profile/stores/ProfileDbDelete/ProfileDbDelete.type";

export const useProfileDbDelete = defineStore('profileDbDelete', (): StoreProfileDbDelete => {
    const deleteProfile = (id: number): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await ProfileDb();
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readwrite');
            const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);
            const request: IDBRequest = store.delete(id);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }

    const deleteAllProfiles = (): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await ProfileDb();
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readwrite');
            const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);
            const request: IDBRequest = store.clear();
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }


    return {
        deleteProfile,
        deleteAllProfiles
    }
});