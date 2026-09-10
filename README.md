# Manager Mobile App

A React Native employee-management application with authentication, employee records, and create/edit/delete workflows backed by Firebase.

## What I built

- Implemented a mobile login flow with Firebase Authentication.
- Built employee listing, creation, editing, and deletion screens.
- Stored employee records in Firebase Realtime Database under the authenticated user.
- Connected screens through React Native Router Flux.
- Managed authentication, form, and employee state with Redux reducers and Redux Thunk asynchronous actions.
- Created reusable React Native form and list components.
- Configured Android and iOS native project targets through the React Native toolchain.

## Technology stack

- **Languages:** JavaScript/JSX, Android Java, iOS Objective-C, Gradle/Groovy, XML, and JSON.
- **Frameworks:** React 16.8.6 and React Native 0.60.4.
- **State and navigation:** Redux 4, React Redux 7.1, Redux Thunk, and React Native Router Flux.
- **Backend services:** Firebase Authentication and Firebase Realtime Database.
- **Libraries:** Lodash and react-native-communications.
- **Development tools:** Node.js, npm, Metro, Babel, Jest, React Test Renderer, ESLint, Android Studio, Android SDK, Xcode, CocoaPods, Watchman, Flow configuration, and Buck configuration.
- **Engineering skills:** mobile UI development, authentication state, asynchronous data flow, CRUD operations, form handling, navigation, cloud persistence, and platform-aware debugging.

## Architecture

```text
src/
├── App.js                 # Firebase initialization and Redux Provider
├── Router.js              # Login and employee-management navigation
├── actions/               # Authentication and employee async actions
├── reducers/              # Auth, employee form, and employee state
└── components/            # Login, list, create, edit, and shared UI
```

## Getting started

The project uses a legacy React Native 0.60.4 toolchain.

```bash
git clone https://github.com/ping58972/manager-mobile-app.git
cd manager-mobile-app
npm install
npm start
npx react-native run-android
```

Run tests and lint:

```bash
npm test
npm run lint
```

## Security note

The historical source contains a client-side Firebase configuration. Before production use, move configuration to an appropriate environment-management strategy and review Firebase Authentication and database security rules.

## Author

**(Ping) Nalongsone Dandank** — [ping58972](https://github.com/ping58972)
