import type {ThemeTypes} from "@/modules/profile/stores/ThemeTypes";

export type StoreProfileThemeManager =  {
    setTheme: (theme: ThemeTypes) => void;
}