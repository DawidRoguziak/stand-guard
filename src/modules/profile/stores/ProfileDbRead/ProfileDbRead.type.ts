import type {Profile} from "@/modules/profile/stores/Profile";

export type StoreProfileDbRead = {
    getAllProfiles: () => Promise<Profile[]>;
    getProfileById: (id: number) => Promise<Profile | null>;
    getProfilesCounter: () => Promise<number>;
    selectLastCreatedProfile: () => Promise<Profile | null>;
}