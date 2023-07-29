export default interface IndexDbReadType<DataType, DbIndex extends keyof DataType> {
    getAll: () => Promise<DataType[]>;
    getById: (id: number) => Promise<DataType | null>;
    getCount: () => Promise<number>;
    getLastCreatedProfile: () => Promise<DataType | null>;
}