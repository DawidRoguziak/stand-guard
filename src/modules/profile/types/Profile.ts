import type {LangTypes} from "@/langs/LangStore";
import type {ThemeTypes} from "@/modules/profile/types/ThemeTypes";

export type Profile = {
    id: number;
    name: string;
    username: string;
    lang: LangTypes;
    theme: ThemeTypes
    plan?: any;
}