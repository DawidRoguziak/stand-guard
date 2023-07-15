import {beforeEach, describe, expect, it} from "vitest";
import globalSetupForTest from "@/__test__/globalSetupForTest";
import {useLangStore} from "@/langs/LangStore";
import {createPinia, setActivePinia} from "pinia";

globalSetupForTest();

describe('LangStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('default state', () => {
        const lang = useLangStore();
        expect(lang.langList).toEqual(['en', 'pl']);
        expect(lang.getLang).toEqual('en');
    });

    it('setLang', () => {
        const lang = useLangStore();
        lang.setLang('pl');
        expect(lang.getLang).toEqual('pl');
    });

    it('getLang', () => {
        const lang = useLangStore();
        lang.setLang('pl');
        expect(lang.getLang).toEqual('pl');
    });
});