import {describe, it, expect} from "vitest";
import "fake-indexeddb/auto";
import IndexDbWrite from "@/modules/indexDbManager/classes/IndexDbWrite/IndexDbWrite";
import type {Profile} from "@/modules/profile/types/Profile";
import IDBFactory from "@/modules/indexDbManager/IDBFactory";
import IndexDbDelete from "@/modules/indexDbManager/classes/IndexDbDelete/IndexDbDelete";
import IndexDbRead from "@/modules/indexDbManager/classes/IndexDbRead/IndexDbRead";
import {DB_STORE_NAME_PROFILE} from "@/constants/constants";

describe("ProfileDbWrite", () => {
    it('should delete profile by id', async () => {
        const write = new IndexDbWrite<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
        const deleteProfile = new IndexDbDelete(DB_STORE_NAME_PROFILE, IDBFactory);
        const counter = new IndexDbRead<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);

        await write.write({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        await write.write({
            name: 'test 2',
            username: 'test 2',
            lang: 'en',
            theme: 'dark'
        });

        const c1 = await counter.getCount();
        expect(c1).toEqual(2);

        await deleteProfile.deleteById(1);
        const c2 = await counter.getCount();
        expect(c2).toEqual(1);

        await deleteProfile.deleteById(2);
        const c3 = await counter.getCount();
        expect(c3).toEqual(0);
    });

    it('should delete all profiles', async () => {
        const write = new IndexDbWrite<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
        const deleteProfile = new IndexDbDelete(DB_STORE_NAME_PROFILE, IDBFactory);
        const counter = new IndexDbRead<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);

        await write.write({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        await write.write({
            name: 'test 2',
            username: 'test 2',
            lang: 'en',
            theme: 'dark'
        });

        const c1 = await counter.getCount();
        expect(c1).toEqual(2);

        await deleteProfile.deleteAll();
        const c2 = await counter.getCount();
        expect(c2).toEqual(0);
    });
});

