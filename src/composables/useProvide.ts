import {provide} from 'vue';
import type {InjectionKey} from 'vue';

export default function useProvide(key: InjectionKey<any>, value: any) {
    provide(key, value);
}