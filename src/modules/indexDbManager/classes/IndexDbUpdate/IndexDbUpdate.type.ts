export default interface IndexDbUpdateType<DataType, DbIndex extends keyof DataType> {
    update: (id: number, data: Omit<DataType, DbIndex>)=> Promise<void>;
}