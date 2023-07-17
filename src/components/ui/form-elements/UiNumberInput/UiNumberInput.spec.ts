import {describe, it} from "vitest";
import globalSetupForTest from "@/__test__/globalSetupForTest";
import {isRendered} from "@/__test__/shared/isRendered";
import {isVisible} from "@/__test__/shared/isVisible";
import UiNumberInput from "@/components/ui/form-elements/UiNumberInput/UiNumberInput.vue";


globalSetupForTest();

describe('UiSelect', () => {
    it('should render', () => {
        isRendered(UiNumberInput, {
            props: {
                name: 'test',
            }
        }, 'ui-number');
    });

    it('should be visible ', () => {
        isVisible(UiNumberInput,{
            props: {
                name: 'test',
            }
        });
    });


});