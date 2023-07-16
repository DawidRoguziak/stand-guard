import {defineStore} from "pinia";
import type {Profile} from "@/modules/profile/stores/Profile";
import ProfileDb, {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ProfileDb";
import type {StoreProfileDbUpdate} from "@/modules/profile/stores/ProfileDbUpdate/ProfileDbUpdate.type";

export const useProfileDbUpdate = defineStore('profileDbUpdate', (): StoreProfileDbUpdate => {
    const updateProfile = (id: number, updateProfileData: Omit<Partial<Profile>, 'id'>): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            const db: IDBDatabase = await ProfileDb();
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readwrite');
            const store: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);
            const request: IDBRequest = store.put({id, ...updateProfileData});
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                if (request.result) {

                    resolve();
                }else {
                    reject(null);
                }
            }
        });
    }

    return {
        updateProfile
    }
});