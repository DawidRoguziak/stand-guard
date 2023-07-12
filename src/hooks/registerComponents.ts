import type {App} from "vue";
import globalRegister from "@/components/ui/global-register";

type ImportedComponent =  {
    default: any
}

export default function (app: App<Element>) {
    const uiComponents = import.meta.glob('../components/ui/**/*.vue', {eager: true});

    Object.entries(uiComponents).forEach(([path, component]) => {
        const name: string | undefined = path.match(/(?<=\/)[^\/]+(?=\.vue$)/)?.[0];

        const isFileMatch = globalRegister.find((c) => c.name === name);

        const data = component as ImportedComponent;
        if (name && data && data.default && isFileMatch) {
            app.component(name, data.default);
        }
    });
}