export type StoreProfileDbDelete = {
    deleteProfile: (id: number) => Promise<void>;
}