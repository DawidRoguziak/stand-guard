import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import UiButton from "@/components/ui/UiButton/UiButton.vue";
import {isVisible} from "@/__test__/shared/isVisible";
import {isRendered} from "@/__test__/shared/isRendered";


describe('UiButton', () => {
    it('should render', () => {
        isRendered(UiButton, {},'ui-button');
    });

    it('should be visible', () => {
        isVisible(UiButton);
    });

    it('should render with slot', () => {
       const wrapper = mount(UiButton, {
              slots: {
                    default: 'test'
              }
       });

       expect(wrapper.text()).toBe('test');
    });

    it('when isBlock classes have .block', () => {
        const wrapper = mount(UiButton, {
            props: {
                isBlock: true
            }
        });

        expect(wrapper.classes()).toContain('block');
    });

    it('should have all types', () => {
        const types = ['primary', 'success', 'warning', 'danger'];

        types.forEach(type => {
            const wrapper = mount(UiButton as any, {
                props: {
                    type
                }
            });

            expect(wrapper.classes()).toContain(`ui-button--${type}`);
        });
    });

    it('should have proper native type',  ()  => {
        const types = ['button', 'submit' , 'reset'];

        types.forEach(type => {
            const wrapper = mount(UiButton as any, {
                props: {
                    nativeType: type
                }
            });

            expect(wrapper.attributes()['type']).toBeDefined();
        });
    });

});