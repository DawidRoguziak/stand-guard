import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'

import LayoutBase from "@/components/layout/LayoutBase/LayoutBase.vue";

import globalSpec from "@/__test__/global.spec";
import {menuRouts} from "@/components/layout/LayoutBase/route-list";

globalSpec();

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


    it('should render menu options', () => {
        const wrapper = mount(LayoutBase);

        const menuItems = menuRouts.map(item => item.urlName);

        menuItems.forEach(item => {
            expect(wrapper.find(`[menu-url-name="${item}"]`)).not.toBeUndefined();
        });
    });
});