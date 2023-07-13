import {nextTick, watchEffect} from "vue";
import type {Ref} from "vue";

export default function useModalActions(
    modalRef: Ref<HTMLDialogElement | undefined>,
    isOpen: Ref<boolean>,
    isOpenClass: Ref<boolean>
) {
    const open = async () => {
        await nextTick();
        if (!modalRef.value) {
            return;
        }

        modalRef.value?.showModal();
        isOpenClass.value = true;
    }

    const close = () => {
        modalRef.value?.close();
        isOpen.value = false;
        setTimeout(() => {
            isOpenClass.value = false;
        }, 100);
    }

    watchEffect(() => {
        if (isOpen.value) {
            open();
        } else {
            close();
        }
    });

    return {
        open,
        close
    }
}