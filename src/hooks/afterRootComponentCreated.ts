import {useLangStore} from "@/langs/LangStore";
import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";

export default async function afterRootComponentCreated(): Promise<void> {

    const {profile} = useActiveProfile();
    if (profile && profile.lang) {
        useLangStore().setLang(profile.lang);
    }
}