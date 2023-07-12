import {describe, it, expect} from "vitest";

import {mount} from "@vue/test-utils";
import UiMenu from "@/components/ui/UiMenu/UiMenu.vue";

import {menuRouts} from "@/components/layout/LayoutBase/route-list";
import {MENU_KEY_OPTIONS} from "@/constants/injection-keys";
import globalSetupForTest from "@/__test__/globalSetupForTest";

globalSetupForTest();

describe('UiMenu', () => {
    it('should work without options', () => {
        const wrapper = mount(UiMenu);

        expect(wrapper.classes()).toContain('ui-menu');
    });

    it('should render menu options', () => {
        const wrapper = mount(UiMenu, {
            global: {
                provide : {
                    [MENU_KEY_OPTIONS]: menuRouts
                }
            }
        });

        const menuItems = menuRouts.map(item => item.urlName);

        menuItems.forEach(item => {
            expect(wrapper.find(`[menu-url-name="${item}"]`)).not.toBeUndefined();
        })
    });
});