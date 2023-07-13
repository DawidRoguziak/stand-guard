import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import UiSelect from "@/components/ui/form-elements/UiSelect/UiSelect.vue";
import globalSetupForTest from "@/__test__/globalSetupForTest";
import {isRendered} from "@/__test__/shared/isRendered";
import {isVisible} from "@/__test__/shared/isVisible";

globalSetupForTest();

describe('UiSelect', () => {
    it('should render', () => {
        isRendered(UiSelect,{
            props: {
                options: [{label: 'opt1', value: 'value1'}, {label: 'opt2', value: 'value2'}],
                name: 'test',
                teleported: false // for test data visible in doom
            },
        }, 'ui-select');
    });

    it('should be visible ', () => {
        isVisible(UiSelect, {
            props: {
                options: [{label: 'opt1', value: 'value1'}, {label: 'opt2', value: 'value2'}],
                name: 'test',
                teleported: false // for test data visible in doom
            },
        });
    });

    it('should render options', async () => {
        // TODO: fix this later
        const wrapper = mount(UiSelect as any, {
            props: {
                options: [{label: 'opt1', value: 'value1'}, {label: 'opt2', value: 'value2'}],
                name: 'test',
                teleported: false // for test data visible in doom
            },
        });

        const options = wrapper.findAll('li');

        await wrapper.vm.$nextTick();

        expect(options).not.toHaveLength(0)
    });

    it('should render options with slot', async () => {
        // TODO: fix this later
        const wrapper = mount(UiSelect as any, {
            props: {
                options: [{label: 'opt1', value: 'value1'}, {label: 'opt2', value: 'value2'}],
                name: 'test',
                teleported: false // for test data visible in doom
            },
            slots: {
                default: `
                <template #default="{options}">
                <div v-for="option in options" :key="option.value" class="test-option" :data-value="option.value">{{option.label}}</div>
                </template>
                `
            }
        });

        const options = wrapper.findAll('.test-option');

        await wrapper.vm.$nextTick();

        expect(options).not.toHaveLength(0)
    });
});