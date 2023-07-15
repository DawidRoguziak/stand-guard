import type {ComputedRef} from "vue";

export type StoreProfileCounter = {
    countProfiles: () => Promise<void>;
    getProfilesCounter: ComputedRef<number>;
}