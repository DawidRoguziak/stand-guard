import {useLangStore} from "@/langs/LangStore";
import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";
import router from "@/router";

export default async function afterRootComponentCreated(): Promise<void> {

    const {profile} = useActiveProfile();
    if (profile && profile.lang) {
        useLangStore().setLang(profile.lang);
    }

    await useActiveProfile().selectProfileFromReferences().then((profile) => {
        if (profile) {
            router.push({name: 'guard-home'});
        }
    }).catch(() => {
    });
}