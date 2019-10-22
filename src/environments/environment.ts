// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'https://jsonplaceholder.typicode.com',
  firebase: {
    apiKey: "AIzaSyBHTBT8ep8ZtpqB7Q914fGZG-LvngiT_qI",
    authDomain: "commeonveut.firebaseapp.com",
    databaseURL: "https://commeonveut.firebaseio.com",
    projectId: "commeonveut",
    storageBucket: "commeonveut.appspot.com",
    messagingSenderId: "773122271960",
    appId: "1:773122271960:web:526e3029fa0b22df8745ad"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
