import type {LangTypes} from "@/langs/LangStore";
import type {ThemeTypes} from "@/modules/profile/stores/ThemeTypes";

export interface Profile {
    id: number;
    name: string;
    username: string;
    lang: LangTypes;
    theme: ThemeTypes
    plan?: any;
}