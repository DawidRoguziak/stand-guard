import {v4 as uuidv4} from 'uuid';
import {computed} from "vue";
import type {ComputedRef} from "vue";

export default function useUuid(): ComputedRef<string> {
    const id = uuidv4();
    return computed(() => id)
}