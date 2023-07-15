import type {Profile} from "@/modules/profile/stores/Profile";

export type StoreProfileDbWrite = {
    createProfile: (profile: Omit<Profile, 'id'>) => Promise<void>;
}