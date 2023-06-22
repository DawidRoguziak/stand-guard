import {defineStore} from "pinia";
import {ref} from "vue";
import type {Ref} from "vue";

export interface GlobalLoaderStore {
    isLoading: Ref<boolean>;
    showLoader: () => void;
    hideLoader: () => void;
}
export const useGlobalLoaderStore = defineStore('globalLoader', () :GlobalLoaderStore => {
    const isLoading = ref(false);

    const showLoader = () => {
        isLoading.value = true;
    }

    const hideLoader = () => {
        isLoading.value = false;
    }

    return {isLoading, showLoader, hideLoader}
});