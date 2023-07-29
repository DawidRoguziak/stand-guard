export default interface IndexDbDeleteType {
    deleteAll: ()=> Promise<void>;
    deleteById: (id: number)=> Promise<void>;
}