import {ref, computed} from 'vue'
import type {Ref, ComputedRef} from 'vue'
import {defineStore} from 'pinia'
import {setupYupLang} from "@/plugins/yup";
import {useI18n} from "vue-i18n";

export type LangTypes = 'pl' | 'en';
export type LanguageStoreType = {
    langList: Ref<LangTypes[]>,
    getLang: ComputedRef<LangTypes>,
    setLang: (lang: LangTypes) => void,
}

export const useLangStore = defineStore('appLang', (): LanguageStoreType => {
    const {t, locale} = useI18n();
    const currentLang = ref<LangTypes>('en');

    const langList = ref<LangTypes[]>(['en', 'pl']);

    const setLang = (lang: LangTypes) => {
        currentLang.value = lang;
        locale.value = lang;

        setupYupLang(t);
    }

    const getLang = computed(() => currentLang.value);

    return {langList, getLang, setLang}
})
