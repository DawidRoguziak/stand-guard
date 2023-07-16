import {defineStore} from "pinia";
import type {Profile} from "@/modules/profile/stores/Profile";
import ProfileDb, {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ProfileDb";
import type {StoreProfileDbRead} from "@/modules/profile/stores/ProfileDbRead/ProfileDbRead.type";


export const useProfileDbRead = defineStore('profileDbRead', (): StoreProfileDbRead => {

    const getAllProfiles = (): Promise<Profile[]> => {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await ProfileDb();
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readonly');
            const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);
            const request: IDBRequest = store.getAll();
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    const getProfilesCount  = (): Promise<number> => {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await ProfileDb();
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readonly');
            const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);
            const request: IDBRequest = store.count();
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    const getProfileById = (id: number): Promise<Profile | null> => {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await ProfileDb();
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readonly');
            const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);
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

    const getLastCreatedProfile = (): Promise<Profile | null> => {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await ProfileDb();
            const transaction = db.transaction(DB_STORE_NAME_PROFILE, 'readonly');
            const store = transaction.objectStore(DB_STORE_NAME_PROFILE);
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

    return {
        getAllProfiles,
        getProfileById,
        getProfilesCount,
        getLastCreatedProfile
    }
});
