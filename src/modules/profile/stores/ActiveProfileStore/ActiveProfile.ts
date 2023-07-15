import {ref} from 'vue';
import {defineStore} from 'pinia';
import type {Profile} from "@/modules/profile/stores/Profile";
import {useProfileDbRead} from "@/modules/profile/stores/ProfileDbRead/ProfileDbReader";
import {useProfileDbWriter} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite";
import {
    useProfileLocalStorageManager
} from "@/modules/profile/stores/ProfileLocalStorageManagerStore/ProfileLocalStorageManager";
import {useProfileThemeManager} from "@/modules/profile/stores/ProfileThemeManagerStore/ProfileThemeManager";
import type {StoreActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile.type";
import {useLangStore} from "@/langs/LangStore";

export const useActiveProfile = defineStore('activeProfile', (): StoreActiveProfile => {
    const profile = ref<Profile | null>(null);

    const {getProfileById} = useProfileDbRead();
    const {setLang} = useLangStore();
    const {createProfile} = useProfileDbWriter();

    const {setPreferredLocalStorage, readPreferredLocalStorage} = useProfileLocalStorageManager();
    const {setTheme} = useProfileThemeManager();

    const setProfile = async (profileId: number): Promise<Profile | null> => {
        return new Promise(async (resolve, reject) => {
            if (!profileId) {
                reject(null);
                return;
            }

            const newProfile = await getProfileById(profileId).catch(() => {
                reject(null);
            });

            if (!newProfile) {
                return;
            }

            profile.value = newProfile;
            setPreferredLocalStorage(newProfile.id);
            setTheme(newProfile.theme);
            setLang(newProfile.lang);
            resolve(newProfile);
        });
    }

    const selectProfileFromReferences = async (): Promise<Profile | null> => {
        const profileId = await readPreferredLocalStorage();
        if (!profileId) {
            return null
        }

        return setProfile(profileId);
    }
    const createProfileAndSetAsActiveProfile = async (profile: Omit<Profile, 'id'>): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            const profileId = await createProfile(profile).catch(() => {
                reject();
            });

            if (!profileId || !Number.isInteger(profileId)) {
                return;
            }

            await setProfile(Number(profileId));
            resolve();
        }) ;
    }

    return {
        profile,
        setProfile,
        selectProfileFromReferences,
        setTheme,
        createProfileAndSetAsActiveProfile,
    }
})
