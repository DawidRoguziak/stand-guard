import {expect} from 'vitest';
import {mount} from '@vue/test-utils';
import type {MountingOptions} from '@vue/test-utils';

export function isVisible(component: unknown, options: MountingOptions<any>) {
    if (!component) {
        expect(component).not.toBeUndefined()
        return
    }

    const wrapper = mount(component, options)

    const style = getComputedStyle(wrapper.element)
    expect(style.visibility).not.toBe('hidden')
    expect(style.display).not.toBe('none')
    expect(parseFloat((!!style.opacity ? style.opacity : '1'))).toBeGreaterThan(0)
}