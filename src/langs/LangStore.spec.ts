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
    });
});