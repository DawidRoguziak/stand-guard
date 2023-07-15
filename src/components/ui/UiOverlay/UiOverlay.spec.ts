import {describe, expect, it} from "vitest";
import {isRendered} from "@/__test__/shared/isRendered";
import UiOverlay from "@/components/ui/UiOverlay/UiOverlay.vue";
import {mount} from "@vue/test-utils";

describe('UiOverlay', () => {
    it('should render', function () {
        isRendered(UiOverlay,{}, 'ui-overlay')
    });

    it('should be visible', function () {
       const wrapper = mount(UiOverlay);
        const style = getComputedStyle(wrapper.element)
        expect(style.visibility).not.toBe('hidden')
        expect(style.display).not.toBe('none')
    });
});