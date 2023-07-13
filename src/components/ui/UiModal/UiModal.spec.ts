import {describe, it, beforeAll, vi, expect} from "vitest";
import UiModal from "@/components/ui/UiModal/UiModal.vue";
import {mount} from "@vue/test-utils";


describe('UiModal', () => {
    beforeAll(() => {
        // workaround for jsdom error
        HTMLDialogElement.prototype.show = vi.fn();
        HTMLDialogElement.prototype.showModal = vi.fn();
        HTMLDialogElement.prototype.close = vi.fn();
    });

    it('should render', function () {
        const wrapper = mount(UiModal, {
            props: {
                isOpen: false
            }
        })

        expect(wrapper.classes()).toContain('ui-modal');
    });

    it('should render and be open', async function () {
        const wrapper = mount(UiModal, {
            props: {
                isOpen: true
            }
        })

        await wrapper.vm.$nextTick();

        expect(wrapper.classes()).toContain('open');
    });

    it('should has default size medium', async function () {
        const wrapper = mount(UiModal, {
            props: {
                isOpen: true
            }
        })

        await wrapper.vm.$nextTick();

        expect(wrapper.classes()).toContain('ui-modal--medium');
    });

    it('should take more size as param', async function () {
        const sizes = ['small', 'medium', 'large', 'full'];

        for (const size of sizes) {
            const wrapper = mount(UiModal as any, {
                props: {
                    isOpen: true,
                    size,
                }
            })

            await wrapper.vm.$nextTick();

            expect(wrapper.classes()).toContain(`ui-modal--${size}`);
        }

    });
});