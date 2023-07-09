import {config} from "@vue/test-utils";
import {createI18n} from "vue-i18n";
import {i18nInstanceSettings} from "@/plugins/i18n";
import {createPinia} from "pinia";
import ElementPlus from "element-plus";
import router from "@/router";

export default () =>
    config.global.plugins = [
        createI18n({...i18nInstanceSettings}),
        createPinia(),
        ElementPlus,
        router
    ];
