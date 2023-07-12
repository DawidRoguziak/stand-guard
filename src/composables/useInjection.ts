import { inject } from 'vue';
import type { InjectionKey } from 'vue';

export default function useInjection<T>(key: InjectionKey<T>): T | Error {
    const injectedValue = inject(key)

    if (!injectedValue) {
        throw new Error(`Failed to inject value for key: ${key.toString()}`)
    }

    return injectedValue;
}