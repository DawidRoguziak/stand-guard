import {beforeAll, describe, expect, it} from "vitest";
import globalSetupForTest from "@/__test__/globalSetupForTest";
import {LanguageStoreType, useLangStore} from "@/langs/LangStore";
import {createPinia, setActivePinia} from "pinia";
import {withSetup} from "@/__test__/withSetup";
import setupI18n from "@/plugins/i18n";

globalSetupForTest();

describe('LangStore', () => {
    beforeAll(() => {
        setActivePinia(createPinia());
    });

    it('default state', () => {
        const [result] =
            withSetup(() => useLangStore(),
                (app: any) => {
                    setupI18n(app);
                });

        const langStore = result as LanguageStoreType;
        expect(result.langList).toEqual(['en', 'pl']);
        expect(result.getLang).toEqual('en');
    });

    it('setLang', () => {
        const [result] =
            withSetup(() => useLangStore(),
                (app: any) => {
                    setupI18n(app);
                });

        const langStore = result as LanguageStoreType;
        langStore.setLang('pl');
        expect(langStore.getLang).toEqual('pl');
    });

    it('getLang', () => {
        const [result] =
            withSetup(() => useLangStore(),
                (app: any) => {
                    setupI18n(app);
                });

        const langStore = result as LanguageStoreType;
        langStore.setLang('pl');
        expect(langStore.getLang).toEqual('pl');
    });
});