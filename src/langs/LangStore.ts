import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {setupYupLang} from "@/plugins/yup";
import {i18nInstance} from "@/plugins/i18n";

export type LangTypes = 'pl' | 'en';

export const useLangStore = defineStore('appLang', () => {
    const currentLang = ref<LangTypes>('en');

    const langList = ref<LangTypes[]>(['en', 'pl']);

    const setLang = (lang: LangTypes) => {
        currentLang.value = lang;
        i18nInstance.global.locale = lang;
        setupYupLang();
    }

    const getLang = computed(() => currentLang.value);

    return {langList, getLang, setLang}
})
