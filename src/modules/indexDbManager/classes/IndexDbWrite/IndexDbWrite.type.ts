export default interface IndexDbWriteType<DataType, DbIndex extends keyof DataType> {
    write: (data: Omit<DataType, DbIndex>) => Promise<number | Error>;
}