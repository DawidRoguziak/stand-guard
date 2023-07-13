import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import globalSetupForTest from "@/__test__/globalSetupForTest";
import {isRendered} from "@/__test__/shared/isRendered";
import {isVisible} from "@/__test__/shared/isVisible";
import UiBlock from "@/components/ui/UiBlock/UiBlock.vue";

globalSetupForTest();

describe('UiBlock', () => {
    it('should render', () => {
        isRendered(UiBlock, {} , 'ui-block');
    });

    it('should be visible ', () => {
        isVisible(UiBlock);
    });

    it('should render slot', () => {
        const wrapper = mount(UiBlock, {
            slots: {
                default: '<div class="test-slot"></div>'
            }
        });

        expect(wrapper.find('.test-slot').exists()).toBeTruthy();
    });
});