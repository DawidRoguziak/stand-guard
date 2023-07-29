import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {
    StoreProfileCounter
} from "@/modules/profile/stores/ProfileCounter/ProfileCounter.type";
import {useProfileIndexDb} from "@/modules/profile/stores/ProfileIndexDbManager/ProfileIndexDbManager";


export const useProfileCounter = defineStore('profileCounter', (): StoreProfileCounter => {
    const isMinimumOneProfile = ref<number>(0);
    const {readDb} = useProfileIndexDb();

    const getProfilesCount = computed((): number => {
        return isMinimumOneProfile.value;
    });

    const countProfiles = async (): Promise<void> => {
        const counted = await readDb.getCount();

        if (counted) {
            isMinimumOneProfile.value = counted;
        }
    }

    return {
        countProfiles,
        getProfilesCount,
    }
});