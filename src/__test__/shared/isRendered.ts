import {expect} from 'vitest';
import {mount} from '@vue/test-utils';

export function isRendered(component: unknown, elementSelectorToFind: string) {
    if (!component) {
        expect(component).not.toBeUndefined()
        return
    }

    const wrapper = mount(component)

    expect(wrapper.classes()).toContain(elementSelectorToFind);
}