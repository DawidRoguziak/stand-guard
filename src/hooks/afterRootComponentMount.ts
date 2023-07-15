import router from "@/router";
import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";

export default function afterRootComponentMount(): void {
    const {profile, setTheme} = useActiveProfile();
    if (profile && profile.theme) {
        setTheme(profile.theme);
        // router.push({name: 'guard-home'});

    }
}