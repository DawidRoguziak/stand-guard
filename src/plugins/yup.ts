import {setLocale} from "yup";
import {i18nInstance} from "@/plugins/i18n";

export function setupYupLang() {
    setLocale({
        mixed: {
            required: i18nInstance.global.t('uiFields.required'),
        },
    });
}

export function setupYupMethods() {
    //     addMethod(string, 'append', function append(appendStr: string) {
//         return this.transform((value) => `${value}${appendStr}`);
//     });
}