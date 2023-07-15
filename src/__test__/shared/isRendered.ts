import {expect} from 'vitest';
import {mount} from '@vue/test-utils';
import type {ComponentMountingOptions} from '@vue/test-utils';
import type {DefineComponent} from "vue";

export function isRendered(component: unknown, options: ComponentMountingOptions<DefineComponent<unknown>> = {}, elementSelectorToFind: string = '') {
    if (!component) {
        expect(component).not.toBeUndefined();
        return
    }

    const wrapper = mount(component, options);

    expect(wrapper.classes()).toContain(elementSelectorToFind);
}