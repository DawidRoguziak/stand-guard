export type StoreProfileDbDelete = {
    deleteProfile: (id: number) => Promise<void>;
    deleteAllProfiles: () => Promise<void>;
}