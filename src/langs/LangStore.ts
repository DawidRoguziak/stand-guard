import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useI18n} from "vue-i18n";
import {setupYupLang} from "@/plugins/yup";

export type LangTypes = 'pl' | 'en';

export const useLangStore = defineStore('appLang', () => {
    const {locale} = useI18n();
    const currentLang = ref<LangTypes>('en');

    const langList = ref<LangTypes[]>(['en', 'pl']);

    const setLang = (lang: LangTypes) => {
        currentLang.value = lang;
        locale.value = lang;
        setupYupLang();
    }

    const getLang = computed(() => currentLang.value);

    return {langList, getLang, setLang}
})
