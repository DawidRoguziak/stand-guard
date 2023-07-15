/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
export {}

declare module 'vue' {
    export interface GlobalComponents {
        UiBlock: typeof import('./src/components/ui/UiBlock/UiBlock.vue')['default']
        UiButton: typeof import('./src/components/ui/UiButton/UiButton.vue')['default']
        UiModal: typeof import('./src/components/ui/UiModal/UiModal.vue')['default']
        UiSelect: typeof import('./src/components/ui/form-elements/UiSelect/UiSelect.vue')['default']
        UiTextInput: typeof import('./src/components/ui/form-elements/UiTextInput/UiTextInput.vue')['default']
    }
}
