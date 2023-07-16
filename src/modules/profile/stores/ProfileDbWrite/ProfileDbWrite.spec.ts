import {describe, it, expect, beforeEach} from "vitest";
import ProfileDb, {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ProfileDb";
import {createPinia, setActivePinia} from "pinia";
import {useProfileDbWriter} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite";
import "fake-indexeddb/auto";

describe("ProfileDbWrite", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should create profile', async () => {
        const store = useProfileDbWriter();

        await store.createProfile({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        ProfileDb().then((db: IDBDatabase) => {
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readonly');
            const objStore: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);

            objStore.getAll().onsuccess = function () {
                expect(this.result).toHaveLength(1);
            }
        });
    });
});