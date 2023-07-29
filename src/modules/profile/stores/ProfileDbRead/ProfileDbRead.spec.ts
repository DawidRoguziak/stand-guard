// import {describe, it, expect, beforeEach} from "vitest";
// import ProfileDb, {DB_STORE_NAME_PROFILE} from "@/modules/profile/stores/ProfileDb";
// import {createPinia, setActivePinia} from "pinia";
// import "fake-indexeddb/auto";
// import {useProfileDbRead} from "@/modules/profile/stores/ProfileDbRead/ProfileDbRead";
// import {useProfileDbWriter} from "@/modules/profile/stores/ProfileDbWrite/ProfileDbWrite";
// import type {Profile} from "@/modules/profile/stores/Profile";
// import {useProfileDbDelete} from "@/modules/profile/stores/ProfileDbDelete/ProfileDbDelete";
//
// describe("ProfileDbRead", () => {
//     beforeEach(() => {
//         setActivePinia(createPinia());
//     });
//
//     it('should getLastCreatedProfile', async () => {
//         const write = useProfileDbWriter();
//         await write.createProfile({
//             name: 'last created',
//             username: 'test',
//             lang: 'en',
//             theme: 'light'
//         });
//
//         const store = useProfileDbRead();
//         const lastProfile: Profile | null = await store.getLastCreatedProfile();
//         if (lastProfile) {
//             expect(lastProfile.name).toBe('last created');
//         } else {
//             expect(lastProfile).not.toBeNull();
//         }
//     });
//
//     it('should get profile by id', async () => {
//         const store = useProfileDbRead();
//         // profile exist because its by test before
//         const profile: Profile | null = await store.getProfileById(1);
//         if (profile) {
//             expect(profile.name).toBe('last created');
//         } else {
//             expect(profile).not.toBeNull();
//         }
//     });
//
//     it('should get profile list ', async () => {
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
//             lang: 'pl',
//             theme: 'dark'
//         });
//
//
//         const store = useProfileDbRead();
//         const profiles = await store.getAllProfiles();
//
//         expect(profiles.length).toBeGreaterThanOrEqual(1);
//     });
//
//     it('should count profile ', async () => {
//         const store = useProfileDbRead();
//         const count = await store.getProfilesCount();
//
//         // 3 because test before create 3 profiles
//         expect(count).toBeGreaterThanOrEqual(3);
//     });
//
//     it('should return 0 if no profiles ', async () => {
//         const store = useProfileDbRead();
//
//         const deleteProfile = useProfileDbDelete();
//         await deleteProfile.deleteAllProfiles();
//
//         const count = await store.getProfilesCount();
//
//         expect(count).toEqual(0);
//     });
// });