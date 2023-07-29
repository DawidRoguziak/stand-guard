// import {beforeAll, describe, it,expect} from "vitest";
// import {createPinia, setActivePinia} from "pinia";
// import {useProfileCounter} from "@/modules/profile/stores/ProfileCounter/ProfileCounter";
// import {useProfileDbWriter} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite";
// import "fake-indexeddb/auto";
//
// describe("ProfileCounter", () => {
//     beforeAll(async () => {
//         setActivePinia(createPinia());
//
//         const write = useProfileDbWriter();
//         await write.createProfile({
//             name: 'test',
//             username: 'test',
//             lang: 'en',
//             theme: 'light'
//         });
//
//         await write.createProfile({
//             name: 'test 2',
//             username: 'test 2',
//             lang: 'en',
//             theme: 'dark'
//         });
//
//     });
//
//     it ('should be 0 profiles', () => {
//         const profileCounter = useProfileCounter();
//         expect(profileCounter.getProfilesCount).toBe(0);
//     });
//
//     it("should count profiles", async () => {
//         const profileCounter = useProfileCounter();
//         await profileCounter.countProfiles();
//
//         expect(profileCounter.getProfilesCount).toBe(2);
//     });
// });