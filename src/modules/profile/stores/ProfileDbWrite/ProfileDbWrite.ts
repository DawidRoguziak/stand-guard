import {defineStore} from "pinia";
import ProfileDb, {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ProfileDb";
import type {Profile} from "@/modules/profile/stores/Profile";
import type {StoreProfileDbWrite} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite.type";

export const useProfileDbWriter = defineStore('profileDbWriter', (): StoreProfileDbWrite => {
    const createProfile = (profile: Omit<Profile, 'id'>): Promise<number> => {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await ProfileDb();
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readwrite');
            const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);
            const request: IDBRequest = store.add(profile);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    return {
        createProfile
    }
});