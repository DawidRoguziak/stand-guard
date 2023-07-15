import {ref} from 'vue';
import {defineStore} from 'pinia';
import type {Profile} from "@/modules/profile/stores/Profile";
import {useProfileDbRead} from "@/modules/profile/stores/ProfileDbRead/ProfileDbReader";
import {useProfileDbWriter} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite";
import {useProfileDbUpdate} from "@/modules/profile/stores/ProfileDbUpdate/ProfileDbUpdate";
import {useProfileDbDelete} from "@/modules/profile/stores/ProfileDbDelete/ProfileDbDelete";
import {
    useProfileLocalStorageManager
} from "@/modules/profile/stores/ProfileLocalStorageManagerStore/ProfileLocalStorageManager";
import {useProfileThemeManager} from "@/modules/profile/stores/ProfileThemeManagerStore/ProfileThemeManager";

export const useActiveProfileStore = defineStore('activeProfile', () => {
    const profile = ref<Profile | null>(null);

    const {getProfileById} = useProfileDbRead();
    const {createProfile} = useProfileDbWriter();

    const {setPreferredLocalStorage, readPreferredLocalStorage} = useProfileLocalStorageManager();
    const {setTheme} = useProfileThemeManager();

    const setProfile = async (profileId: number): Promise<void> => {
        if (!profileId) {
            return;
        }

        const newProfile = await getProfileById(profileId);
        if (!newProfile) {
            return;
        }

        profile.value = newProfile;
        setPreferredLocalStorage(newProfile.id);
        setTheme(newProfile.theme);
    }


    const selectProfileFromReferences = async (): Promise<void> => {
        const profileId = await readPreferredLocalStorage();
        if (!profileId) {
            return;
        }

        await setProfile(profileId);
    }
    const createProfileAndSetAsActiveProfile = async (profile: Omit<Profile, 'id'>): Promise<void> => {
        await createProfile(profile);
        await setProfile(1);
    }

    return {
        setProfile,
        selectProfileFromReferences,
        createProfileAndSetAsActiveProfile,
    }
})
