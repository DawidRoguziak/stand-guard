`components` directory contains the components used in project by they don't belong to any specific module.

`form-elements` directory contains the components that are used in forms. Naming convention is `Ui{ComponentName}`.

`layout` directory contains the components that define layouts. Naming convention is `Layout{ComponentName}`.

`ui` directory contains the components that are used in the UI. Naming convention is `UI{ComponentName}`.
`global-register.ts` file is used to register the components that are used globally in the app, but to have ts 
know that u need to add record in `components.d.ts` file.

`utils` directory contains the components that are specific like `GlobalLoader` which is used once in app. Naming
convention is `{ComponentName}`.

`views` directory contains the components that define Views but don't belong to any module or are shared like `View404`.
Naming convention is `View{ComponentName}`.