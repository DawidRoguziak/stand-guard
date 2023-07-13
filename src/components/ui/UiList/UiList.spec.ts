import {describe, it, expect} from "vitest";
import {isRendered} from "@/__test__/shared/isRendered";
import UiList from "@/components/ui/UiList/UiList.vue";
import {isVisible} from "@/__test__/shared/isVisible";
import {mount} from "@vue/test-utils";


describe('UiList', () => {
    it('should render', () => {
        isRendered(UiList, {
            props: {
                items: [{label: 'test', value: 'test'}],
                keyField: 'label'
            }
        }, 'ui-list');
    });

    it('should be visible', () => {
        isVisible(UiList, {
            props: {
                items: [{label: 'test', value: 'test'}],
                keyField: 'label'
            }
        })
    });

    it('should render with slot', () => {
        const testArray = [{label: 'test', value: 'test'}, {label: 'test1', value: 'test1'}];

        const wrapper = mount(UiList as any, {
            props: {
                items: testArray,
                keyField: 'label'
            },
            slots: {
                default: `
                    <template #default="{item}">
                        <div class="test-item" :data-value="item.value">{{item.label}}}</div>
                    </template>
                `
            }
        });

        testArray.forEach((item) => {
            expect(wrapper.find(`.test-item[data-value="${item.value}"]`).exists()).toBe(true);
        });
    });
});