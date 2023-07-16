import {setLocale} from "yup";
import type {ComposerTranslation} from "vue-i18n";

export function setupYupLang(t: ComposerTranslation) {
    setLocale({
        mixed: {
            required: t('uiFields.required'),
        },
    });
}

export function setupYupMethods() {
    //     addMethod(string, 'append', function append(appendStr: string) {
//         return this.transform((value) => `${value}${appendStr}`);
//     });
}