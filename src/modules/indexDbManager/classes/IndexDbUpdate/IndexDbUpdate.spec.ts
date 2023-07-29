import {describe, it, expect} from "vitest";
import "fake-indexeddb/auto";
import IndexDbWrite from "@/modules/indexDbManager/classes/IndexDbWrite/IndexDbWrite";
import type {Profile} from "@/modules/profile/types/Profile";
import {DB_STORE_NAME_PROFILE} from "@/constants/constants";
import IDBFactory from "@/modules/indexDbManager/IDBFactory";
import IndexDbUpdate from "@/modules/indexDbManager/classes/IndexDbUpdate/IndexDbUpdate";

describe("ProfileDbUpdate", () => {

    it('should updateProfile', async () => {
        const dbWrite = new IndexDbWrite<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
        const dbUpdate = new IndexDbUpdate<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);

        const id = await dbWrite.write({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        if (id instanceof Error) {
            expect(id).not.toBeInstanceOf(Error);
            return;
        }

        await dbUpdate.update(id, {
            name: 'test 2',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        IDBFactory(DB_STORE_NAME_PROFILE).then((db: IDBDatabase) => {
            const transaction: IDBTransaction = db.transaction(DB_STORE_NAME_PROFILE, 'readonly');
            const objStore: IDBObjectStore = transaction.objectStore(DB_STORE_NAME_PROFILE);

            objStore.get(id).onsuccess = function () {
                expect(this.result.name).toEqual('test 2');
            }
        });
    });
});