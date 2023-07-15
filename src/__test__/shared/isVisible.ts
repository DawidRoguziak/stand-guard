import {expect} from 'vitest';
import {mount} from '@vue/test-utils';
import type {MountingOptions, ComponentMountingOptions} from '@vue/test-utils';
import type {DefineComponent} from "vue";

export async function isVisible(component: unknown, options: ComponentMountingOptions<DefineComponent<unknown>> = {}) {
    if (!component) {
        expect(component).not.toBeUndefined()
        return
    }

    const wrapper = mount(component, options)

    await wrapper.vm.$nextTick();

    const style = getComputedStyle(wrapper.element);
    expect(style.visibility).not.toBe('hidden');
    expect(style.display).not.toBe('none');
    expect(parseFloat((!!style.opacity ? style.opacity : '1'))).toBeGreaterThan(0);
}