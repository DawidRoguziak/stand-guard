import {useProfileCounter} from "@/modules/profile/stores/ProfileCounter/ProfileCounter";

export default async function beforeRouterInit(): Promise<void> {
    await useProfileCounter().countProfiles();
}