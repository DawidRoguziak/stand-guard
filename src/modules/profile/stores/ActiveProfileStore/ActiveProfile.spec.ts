import "fake-indexeddb/auto";
import {describe, it, expect, beforeEach, beforeAll} from "vitest";
import {createPinia, setActivePinia} from "pinia";
import {useProfileDbWriter} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite";
import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";

describe('ActiveProfile store', () => {
    beforeAll(async () => {
        setActivePinia(createPinia());

        const write = useProfileDbWriter();
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
    });


    it('should profile should null', () => {
        const activeProfile = useActiveProfile();
        expect(activeProfile.profile).toBe(null);
    });

    it('should set profile', async () => {
        const activeProfile = useActiveProfile();

        await activeProfile.setProfile(1);
        expect(activeProfile.profile).not.toBe(null);
        expect(activeProfile.profile?.id).toBe(1);

        await activeProfile.setProfile(2);
        expect(activeProfile.profile).not.toBe(null);
        expect(activeProfile.profile?.id).toBe(2);
    });

    // TODO need to mock localStorage
    // it('should select profile from references', async () => {
    //     const activeProfile = useActiveProfile();
    //     await activeProfile.selectProfileFromReferences();
    //
    //     expect(activeProfile.profile).not.toBe(null);
    //     expect(activeProfile.profile?.id).toBe(2);
    // });

    it('should create profile and set as active profile', async () => {
        const activeProfile = useActiveProfile();
        await activeProfile.createProfileAndSetAsActiveProfile({
            name: 'test 3',
            username: 'test 3',
            lang: 'en',
            theme: 'dark'
        });

        expect(activeProfile.profile).not.toBe(null);
        expect(activeProfile.profile?.id).toBe(3);
    });
})