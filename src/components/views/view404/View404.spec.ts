import {describe, it, expect} from "vitest";
import {isRendered} from "@/__test__/shared/isRendered";
import View404 from "@/components/views/view404/View404.vue";
import {mount} from "@vue/test-utils";

describe('View404', () => {
    it('should render', () => {
        isRendered(View404, {}, 'view-404');
    });

    it('should has correct text', () => {
        const wrapper = mount(View404);

        const title = wrapper.find('h1');
        const p = wrapper.find('p');

        expect(title.text()).toContain('404');
        expect(p.text()).toContain('Page not found');
    });
});