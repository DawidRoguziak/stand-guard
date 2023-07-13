import {expect} from 'vitest';
import {mount,} from '@vue/test-utils';
import type {MountingOptions} from '@vue/test-utils';

export function isRendered(component: unknown, options: MountingOptions<any> = {}, elementSelectorToFind: string = '') {
    if (!component) {
        expect(component).not.toBeUndefined()
        return
    }

    const wrapper = mount(component, options)

    expect(wrapper.classes()).toContain(elementSelectorToFind);
}