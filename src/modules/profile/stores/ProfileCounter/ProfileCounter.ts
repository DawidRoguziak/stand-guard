import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useProfileDbRead} from "@/modules/profile/stores/ProfileDbRead/ProfileDbRead";
import type {
    StoreProfileCounter
} from "@/modules/profile/stores/ProfileCounter/ProfileCounter.type";


export const useProfileCounter = defineStore('profileCounter', (): StoreProfileCounter => {
    const isMinimumOneProfile = ref<number>(0);
    const {getProfilesCount: count} = useProfileDbRead();

    const getProfilesCount = computed((): number => {
        return isMinimumOneProfile.value;
    });

    const countProfiles = async (): Promise<void> => {
        const counted = await count();

        if (counted) {
            isMinimumOneProfile.value = counted;
        }
    }

    return {
        countProfiles,
        getProfilesCount,
    }
});