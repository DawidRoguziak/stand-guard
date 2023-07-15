import type {Ref} from "vue";
import type {Profile} from "@/modules/profile/stores/Profile";
import type {ThemeTypes} from "@/modules/profile/stores/ThemeTypes";

export type ProfileStore = {
    profile: Ref<Profile | null>;
    isMinimumOneProfile: Ref<boolean>;
    createProfile: (profile: Omit<Profile, 'id'>) => Promise<void>;
    getAllProfiles: () => Promise<Profile[]>;
    deleteProfile: (id: number) => Promise<void>;
    updateProfile: (profile: Omit<Partial<Profile>, 'id'>) => Promise<void>;
    selectProfileById: (id: number) => void;
    selectLastCreatedProfile: () => Promise<void>;
    readPreferredLocalStorage: () => Promise<void>;
    setTheme: (theme: ThemeTypes) => void;
}
