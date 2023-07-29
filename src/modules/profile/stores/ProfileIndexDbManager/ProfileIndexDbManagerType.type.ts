import type IndexDbWriteType from "@/modules/indexDbManager/classes/IndexDbWrite/IndexDbWrite.type";
import type {Profile} from "@/modules/profile/types/Profile";
import type IndexDbReadType from "@/modules/indexDbManager/classes/IndexDbRead/IndexDbRead.type";
import type IndexDbUpdateType from "@/modules/indexDbManager/classes/IndexDbUpdate/IndexDbUpdate.type";
import type IndexDbDeleteType from "@/modules/indexDbManager/classes/IndexDbDelete/IndexDbDelete.type";

export type ProfileIndexDbManagerType =  {
    writeDb: IndexDbWriteType<Profile, 'id'>
    readDb: IndexDbReadType<Profile, 'id'>
    updateDb: IndexDbUpdateType<Profile, 'id'>
    deleteDb: IndexDbDeleteType
}