import type UiMenuOption from "@/components/utility/UiMenu/UiMenuOption";
import type {ComposerTranslation} from "vue-i18n";

export const getRouts = (t: ComposerTranslation): UiMenuOption[] => [
    {
        icon: 'safety_check',
        label: t('home'),
        urlName: 'guard-home'
    },
    {
        icon: 'edit_calendar',
        label: t('planDefinition'),
        urlName: 'guard-define-plan'
    },
    {
        icon: 'manage_accounts',
        label: t('Create first profile'),
        urlName: 'create-first-profile'
    }
]