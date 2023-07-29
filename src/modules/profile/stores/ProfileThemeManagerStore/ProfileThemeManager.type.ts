import type {ThemeTypes} from "@/modules/profile/types/ThemeTypes";

export type StoreProfileThemeManager =  {
    setTheme: (theme: ThemeTypes) => void;
}