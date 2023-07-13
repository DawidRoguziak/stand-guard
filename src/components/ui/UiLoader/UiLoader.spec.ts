import {describe, it} from "vitest";
import {isRendered} from "@/__test__/shared/isRendered";
import UiLoader from "@/components/ui/UiLoader/UiLoader.vue";
import {isVisible} from "@/__test__/shared/isVisible";


describe('UiLoader', () => {
    it('should render', function () {
        isRendered(UiLoader, {}, 'ui-loader');
    });

    it('should be visible', function () {
        isVisible(UiLoader);
    });
});