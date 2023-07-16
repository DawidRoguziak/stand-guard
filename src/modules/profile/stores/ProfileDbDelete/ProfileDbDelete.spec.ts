import {describe, it, expect, beforeEach} from "vitest";
import ProfileDb, {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ProfileDb";
import {createPinia, setActivePinia} from "pinia";
import {useProfileDbWriter} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite";
import "fake-indexeddb/auto";
import {useProfileDbDelete} from "@/modules/profile/stores/ProfileDbDelete/ProfileDbDelete";
import {useProfileDbRead} from "@/modules/profile/stores/ProfileDbRead/ProfileDbRead";

describe("ProfileDbWrite", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should delete profile by id', async () => {
        const write = useProfileDbWriter();
        const deleteProfile = useProfileDbDelete();
        const counter = useProfileDbRead();

        await write.createProfile({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        await write.createProfile({
            name: 'test 2',
            username: 'test 2',
            lang: 'en',
            theme: 'dark'
        });

        const c1 = await counter.getProfilesCount();
        expect(c1).toEqual(2);

        await deleteProfile.deleteProfile(1);
        const c2 = await counter.getProfilesCount();
        expect(c2).toEqual(1);

        await deleteProfile.deleteProfile(2);
        const c3 = await counter.getProfilesCount();
        expect(c3).toEqual(0);
    });

    it('should delete all profiles', async () => {
        const write = useProfileDbWriter();
        const deleteProfile = useProfileDbDelete();
        const counter = useProfileDbRead();

        await write.createProfile({
            name: 'test',
            username: 'test',
            lang: 'en',
            theme: 'light'
        });

        await write.createProfile({
            name: 'test 2',
            username: 'test 2',
            lang: 'en',
            theme: 'dark'
        });

        const c1 = await counter.getProfilesCount();
        expect(c1).toEqual(2);

        await deleteProfile.deleteAllProfiles();
        const c2 = await counter.getProfilesCount();
        expect(c2).toEqual(0);
    });
});

