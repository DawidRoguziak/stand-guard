import {expect} from 'vitest';
import {mount} from '@vue/test-utils';

export function isVisible(component: unknown) {
    if (!component) {
        expect(component).not.toBeUndefined()
        return
    }

    const wrapper = mount(component)

    const style = getComputedStyle(wrapper.element)
    expect(style.visibility).not.toBe('hidden')
    expect(style.display).not.toBe('none')
    expect(parseFloat(style.opacity)).toBeGreaterThan(0)
}