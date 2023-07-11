import type {LangTypes} from "@/langs/LangStore";
import type {ThemeTypes} from "@/modules/profile/stores/ThemeTypes";

export type Profile = {
    id: number;
    name: string;
    username: string;
    lang: LangTypes;
    theme: ThemeTypes
    plan?: any;
}