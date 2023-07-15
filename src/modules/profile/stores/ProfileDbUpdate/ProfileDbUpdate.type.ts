import type {Profile} from "@/modules/profile/stores/Profile";

export type StoreProfileDbUpdate = {
    updateProfile: (id: number, updateProfileData: Omit<Partial<Profile>, 'id'>) => Promise<void>;
}