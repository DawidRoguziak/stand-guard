import {defineStore} from "pinia";
import type {
    StoreProfileLocalStorageManager
} from "@/modules/profile/stores/ProfileLocalStorageManagerStore/ProfileLocalStorageManager.type";

const PREFERRED_PROFILE_LOCAL_STORAGE_KEY = 'preferredProfileId';
export const  useProfileLocalStorageManager = defineStore('profileLocalStorageManager', (): StoreProfileLocalStorageManager => {
    const setPreferredLocalStorage = (id: number): void => {
        localStorage.setItem(PREFERRED_PROFILE_LOCAL_STORAGE_KEY, id.toString());
    }

    const deletePreferredLocalStorage = (): void => {
        localStorage.removeItem(PREFERRED_PROFILE_LOCAL_STORAGE_KEY);
    }

    const readPreferredLocalStorage = (): Promise<number | null> => {
        return new Promise(async (resolve, reject) => {
            const id = localStorage.getItem(PREFERRED_PROFILE_LOCAL_STORAGE_KEY);
            if (id) {
                resolve(Number(id));
            } else {
                reject(null);
            }
        });
    }

    return {
        setPreferredLocalStorage,
        deletePreferredLocalStorage,
        readPreferredLocalStorage,
    }
});