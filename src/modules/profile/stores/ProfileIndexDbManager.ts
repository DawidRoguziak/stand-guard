import {defineStore} from "pinia";
import type {ProfileIndexDbType} from "@/modules/profile/stores/ProfileIndexDbType.type";
import IndexDbWrite from "@/modules/indexDbManager/classes/IndexDbWrite/IndexDbWrite";
import type {Profile} from "@/modules/profile/stores/Profile";
import IDBFactory from "@/modules/indexDbManager/IDBFactory";
import {DB_STORE_NAME_PROFILE} from "@/constants/constants";
import IndexDbRead from "@/modules/indexDbManager/classes/IndexDbRead/IndexDbRead";
import IndexDbUpdate from "@/modules/indexDbManager/classes/IndexDbUpdate/IndexDbUpdate";
import IndexDbDelete from "@/modules/indexDbManager/classes/IndexDbDelete/IndexDbDelete";

export const useProfileIndexDb = defineStore('profileIndexDb', (): ProfileIndexDbType => {

    const writeDb = new IndexDbWrite<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
    const readDb = new IndexDbRead<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
    const updateDb = new IndexDbUpdate<Profile, 'id'>(DB_STORE_NAME_PROFILE, IDBFactory);
    const deleteDb = new IndexDbDelete(DB_STORE_NAME_PROFILE, IDBFactory);

    return {
        writeDb,
        readDb,
        updateDb,
        deleteDb
    }
});