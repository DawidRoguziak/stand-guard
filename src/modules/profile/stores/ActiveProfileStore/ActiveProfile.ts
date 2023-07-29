import {ref} from 'vue';
import {defineStore} from 'pinia';
import type {Profile} from "@/modules/profile/stores/Profile";
import {
    useProfileLocalStorageManager
} from "@/modules/profile/stores/ProfileLocalStorageManagerStore/ProfileLocalStorageManager";
import {useProfileThemeManager} from "@/modules/profile/stores/ProfileThemeManagerStore/ProfileThemeManager";
import type {StoreActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile.type";
import {useLangStore} from "@/langs/LangStore";
import {useProfileIndexDb} from "@/modules/profile/stores/ProfileIndexDbManager";
export const DB_STORE_NAME_PROFILE = 'profiles';

export const useActiveProfile = defineStore('activeProfile', (): StoreActiveProfile => {
    const profile = ref<Profile | null>(null);
    const {writeDb, readDb} = useProfileIndexDb();

    const {setLang} = useLangStore();

    const {setPreferredLocalStorage, readPreferredLocalStorage} = useProfileLocalStorageManager();
    const {setTheme} = useProfileThemeManager();

    const setProfile = async (profileId: number): Promise<Profile | null> => {
        return new Promise(async (resolve, reject) => {
            if (!profileId) {
                reject(null);
                return;
            }

            const newProfile = await readDb.getById(profileId).catch(() => {
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
            const profileId = await writeDb.write(profile).catch(() => {
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
