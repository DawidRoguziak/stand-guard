import {useActiveProfile} from "@/modules/profile/stores/ActiveProfileStore/ActiveProfile";
import router from "@/router";

export default async function beforeRouterInit (): Promise<void> {
   await useActiveProfile().selectProfileFromReferences().then((profile) => {
         if (profile) {
            router.push({name: 'guard-home'});
         }
   }).catch(() => {});
}