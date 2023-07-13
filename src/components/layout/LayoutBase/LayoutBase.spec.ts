import {describe, it, expect} from 'vitest';

import {mount} from '@vue/test-utils';

import LayoutBase from "@/components/layout/LayoutBase/LayoutBase.vue";

import globalSetupForTest from "@/__test__/globalSetupForTest";

globalSetupForTest();

describe('LayoutBase', () => {
    it('empty default slot should not cause a error', () => {
        const wrapper = mount(LayoutBase);

        expect(wrapper.classes()).toContain('layout-base')
    });

    it('default slot should render content', () => {
        const wrapper = mount(LayoutBase, {
            slots: {
                default: '<div>Default slot render</div>'
            }
        });

        expect(wrapper.text()).toContain('Default slot render')
    });
});