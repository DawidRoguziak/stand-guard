import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import globalSetupForTest from "@/__test__/globalSetupForTest";
import {isRendered} from "@/__test__/shared/isRendered";
import {isVisible} from "@/__test__/shared/isVisible";
import UiTextInput from "@/components/ui/form-elements/UiTextInput/UiTextInput.vue";

globalSetupForTest();

describe('UiSelect', () => {
    it('should render', () => {
        isRendered(UiTextInput, {
            props: {
                name: 'test',
            }
        }, 'ui-input');
    });

    it('should be visible ', () => {
        isVisible(UiTextInput,{
            props: {
                name: 'test',
            }
        });
    });


});