import {describe, it, expect} from "vitest";
import {isRendered} from "@/__test__/shared/isRendered";
import GlobalLoader from "@/components/utility/GlobalLoader/GlobalLoader.vue";
import globalSetupForTest from "@/__test__/globalSetupForTest";
import {isVisible} from "@/__test__/shared/isVisible";
import {useGlobalLoaderStore} from "@/components/utility/GlobalLoader/GlobalLoaderStore";
import {mount} from "@vue/test-utils";

globalSetupForTest();

describe('GlobalLoader', () => {
    it('should render', () => {
        isRendered(GlobalLoader, {}, 'global-loader');
    });

    it('should be hidden', async () => {
        const wrapper = mount(GlobalLoader);

        await wrapper.vm.$nextTick();

        const style = getComputedStyle(wrapper.element)
        expect(style.display).toBe('none')
    });

    it('should be visible when is loader is true', () => {
        const globalLoader = useGlobalLoaderStore();
        globalLoader.showLoader()
        isVisible(GlobalLoader);
    });

    it('should has UiLoader component', () => {
       const wrapper = mount(GlobalLoader);
       wrapper.findComponent({name: 'UiLoader'});
    });

    it('should has UiOverlay component', () => {
       const wrapper = mount(GlobalLoader);
       wrapper.findComponent({name: 'UiOverlay'});
    });
});