import {describe, it, expect} from "vitest";
import "fake-indexeddb/auto";
import IndexDbWrite from "@/modules/indexDbManager/classes/IndexDbWrite/IndexDbWrite";
import type {Profile} from "@/modules/profile/types/Profile";
import {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";
import IDBFactory from "@/modules/indexDbManager/IDBFactory";

describe("ProfileDbWrite", () => {

    it('should create profile', async () => {
        const store = new IndexDbWrite<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);

        await store.write({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        IDBFactory(DB_STORE_NAME_PROFILE).then((db: IDBDatabase) => {
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readonly');
            const objStore: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);

            objStore.getAll().onsuccess = function () {
                expect(this.result).toHaveLength(1);
            }
        });
    });
});