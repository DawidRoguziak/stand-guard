import {describe, it, expect, beforeEach} from "vitest";
import ProfileDb, {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ProfileDb";
import {createPinia, setActivePinia} from "pinia";
import {useProfileDbWriter} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite";
import "fake-indexeddb/auto";
import {useProfileDbUpdate} from "@/modules/profile/stores/ProfileDbUpdate/ProfileDbUpdate";

describe("ProfileDbUpdate", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should updateProfile', async () => {
        const dbWrite = useProfileDbWriter();
        const dbUpdate = useProfileDbUpdate();

        const id = await dbWrite.createProfile({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        if (id instanceof Error) {
            expect(id).not.toBeInstanceOf(Error);
            return;
        }

        await dbUpdate.updateProfile(id, {
            name: 'test 2',
        });

        ProfileDb().then((db: IDBDatabase) => {
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readonly');
            const objStore: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);

            objStore.get(id).onsuccess = function () {
                expect(this.result.name).toEqual('test 2');
            }
        });
    });
});