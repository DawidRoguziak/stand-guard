import type {Ref} from "vue";
import type {Profile} from "@/modules/profile/types/Profile";
import type {ThemeTypes} from "@/modules/profile/types/ThemeTypes";

export type StoreActiveProfile = {
    profile: Ref<Profile | null>;
    selectProfileFromReferences: () => Promise<Profile | null>;
    setTheme: (theme: ThemeTypes) => void;
    setProfile: (profileId: number) => Promise<Profile | null>;
    createProfileAndSetAsActiveProfile: (profile: Omit<Profile, 'id'>) => Promise<void>;
}
