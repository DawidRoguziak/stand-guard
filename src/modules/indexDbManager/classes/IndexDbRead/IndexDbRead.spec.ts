import {describe, it, expect} from "vitest";
import "fake-indexeddb/auto";
import type {Profile} from "@/modules/profile/types/Profile";
import IndexDbWrite from "@/modules/indexDbManager/classes/IndexDbWrite/IndexDbWrite";
import IDBFactory from "@/modules/indexDbManager/IDBFactory";
import {DB_STORE_NAME_PROFILE} from "@/constants/constants";
import IndexDbRead from "@/modules/indexDbManager/classes/IndexDbRead/IndexDbRead";
import IndexDbDelete from "@/modules/indexDbManager/classes/IndexDbDelete/IndexDbDelete";

describe("ProfileDbRead", () => {

    it('should getLastCreatedProfile', async () => {
        const write = new IndexDbWrite<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
        await write.write({
            name: 'last created',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        const read = new IndexDbRead<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);

        const lastProfile: Profile | null = await read.getLastCreatedProfile();
        if (lastProfile) {
            expect(lastProfile.name).toBe('last created');
        } else {
            expect(lastProfile).not.toBeNull();
        }
    });

    it('should get profile by id', async () => {
        const read = new IndexDbRead<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
        // profile exist because its by test before
        const profile: Profile | null = await read.getById(1);
        if (profile) {
            expect(profile.name).toBe('last created');
        } else {
            expect(profile).not.toBeNull();
        }
    });

    it('should get profile list ', async () => {
        const write = new IndexDbWrite<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
        await write.write({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        await write.write({
            name: 'test 2',
            username: 'test 2',
            lang: 'pl',
            theme: 'dark'
        });


        const read = new IndexDbRead<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
        const profiles = await read.getAll();

        expect(profiles.length).toBeGreaterThanOrEqual(1);
    });

    it('should count profile ', async () => {
        const read = new IndexDbRead<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
        const count = await read.getCount();

        // 3 because test before create 3 profiles
        expect(count).toBeGreaterThanOrEqual(3);
    });

    it('should return 0 if no profiles ', async () => {
        const read = new IndexDbRead<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);

        const deleteProfile = new IndexDbDelete(DB_STORE_NAME_PROFILE, IDBFactory);
        await deleteProfile.deleteAll();

        const count = await read.getCount();

        expect(count).toEqual(0);
    });
});