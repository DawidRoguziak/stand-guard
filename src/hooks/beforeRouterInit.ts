import {useProfileStore} from "@/modules/profile/stores/ProfileStore";

export default async function beforeRouterInit (): Promise<void> {
   await useProfileStore().readPreferredLocalStorage().catch(() => {});
}