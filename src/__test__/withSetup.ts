import { createApp } from 'vue'
export function withSetup(composable: any, appUseCall: any) {
    let result: any
    const app = createApp({
        setup() {
                result = composable()
            // suppress missing template warning
            return () => {}
        }
    })

    appUseCall(app);
    app.mount(document.createElement('div'))
    // return the result and the app instance
    // for testing provide / unmount
    return [result, app]
}