import {useProfileStore} from "@/modules/profile/stores/ProfileStore";
import router from "@/router";

export default function  afterRootComponentMount (): void {
    const {profile, setTheme} = useProfileStore();
    if (profile && profile.theme)  {
        setTheme(profile.theme);
        router.push({name: 'guard-home'});
    }
}