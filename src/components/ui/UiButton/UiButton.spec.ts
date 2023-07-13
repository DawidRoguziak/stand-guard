import {describe} from "vitest";
import {mount} from "@vue/test-utils";
import UiButton from "@/components/ui/UiButton/UiButton.vue";


describe('UiButton', () => {
    it('should render', () => {
        const wrapper = mount(UiButton);

        expect(wrapper.classes()).toContain('ui-button');
    })
});