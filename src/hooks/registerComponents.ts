import type {App} from "vue";
import globalRegister from "@/components/ui/global-register";

export default function (app: App<Element>) {
    const uiComponents = import.meta.glob('../components/ui/**/*.vue', {eager: true});

    Object.entries(uiComponents).forEach(([path, component]) => {
        const name = path.match(/(?<=\/)[^\/]+(?=\.vue$)/)?.[0];
        if (globalRegister.find((c) => c.name === name)) {
            app.component(name, component.default);
        }
    });
}