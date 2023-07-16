import 'vue-router'
import type {Layouts} from "@/components/layout/LayoutResolver.vue";

// To ensure it is treated as a module, add at least one `export` statement
export {}

declare module 'vue-router' {
    interface RouteMeta {
        // must be declared by every route
        requireProfile: boolean,
        layout?: Layouts,
    }
}