import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

// @ts-ignore
import App from '@/App.vue';
import router from './router';
import setupVeeValidate from "@/plugins/vee-validate";
import setupI18n from "@/plugins/i18n";
import {setupYupLang, setupYupMethods} from "@/plugins/yup";
import beforeRouterInit from "@/hooks/beforeRouterInit";

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
beforeRouterInit().then(() => {
    app.use(router);

    setupVeeValidate();
    setupI18n(app);
    setupYupLang();
    setupYupMethods();

    app.mount('#app');
});


