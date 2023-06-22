import {useLangStore} from "@/langs/LangStore";
import {useProfileStore} from "@/modules/profile/stores/ProfileStore";

export default async function afterRootComponentCreated(): Promise<void> {
    const {profile} = useProfileStore();

    if (profile && profile.lang) {
        useLangStore().setLang(profile.lang);
    }
}