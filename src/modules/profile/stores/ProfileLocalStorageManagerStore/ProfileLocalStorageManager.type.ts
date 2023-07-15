export type StoreProfileLocalStorageManager =  {
    setPreferredLocalStorage: (id: number) => void;
    deletePreferredLocalStorage: () => void;
    readPreferredLocalStorage: () => Promise<number | null>;
}