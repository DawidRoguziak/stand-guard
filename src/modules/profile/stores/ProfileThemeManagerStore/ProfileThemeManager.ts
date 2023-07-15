import {defineStore} from "pinia";
import type {ThemeTypes} from "@/modules/profile/stores/ThemeTypes";
import type {
    StoreProfileThemeManager
} from "@/modules/profile/stores/ProfileThemeManagerStore/ProfileThemeManager.type";

export const useProfileThemeManager = defineStore('profileThemeManager', (): StoreProfileThemeManager => {
    const setTheme = (theme: ThemeTypes): void => {
        const currentTheme = theme === 'light' ? 'dark' : 'light';

        document.querySelector(':root')?.classList.remove(currentTheme);
        document.querySelector(':root')?.classList.add(theme);
    }

    return {
        setTheme,
    }
});