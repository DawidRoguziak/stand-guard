import {computed, ref, useSlots} from "vue";
import type {ComputedRef, Ref} from "vue";

export default function useModalSlots(): {
    modalRef: Ref<HTMLDialogElement | undefined>,
    hasFooterSlot: ComputedRef<boolean>
} {
    const modalRef = ref<HTMLDialogElement>();
    const slots = useSlots();
    const hasFooterSlot = computed(() => !!slots['footer']);

    return {
        modalRef,
        hasFooterSlot,
    }

}