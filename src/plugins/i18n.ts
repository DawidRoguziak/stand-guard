import {createI18n} from 'vue-i18n';
import en from '@/langs/en';
import pl from '@/langs/pl';
export const i18nInstanceSettings = {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        pl,
        en
    }
}

export const i18nInstance = createI18n({
    ...i18nInstanceSettings
});

export default function setupI18n(app: any) {
    app.use(i18nInstance);
}

