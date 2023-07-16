import type {ComputedRef} from "vue";

export type StoreProfileCounter = {
    countProfiles: () => Promise<void>;
    getProfilesCount: ComputedRef<number>;
}