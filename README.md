# (Unofficial) Nuxt 3 + DaisyUI + Firebase Boilerplate


<a href="https://nuxtjs.org">
  <img src="https://firebasestorage.googleapis.com/v0/b/tracking-tool-777.appspot.com/o/assets%2Fnuxt.png?alt=media&token=6f34b34a-7d4e-41ce-a9c4-2733d31b8b2d">
</a>
<a href="https://daisyui.com">
  <img src="https://firebasestorage.googleapis.com/v0/b/tracking-tool-777.appspot.com/o/assets%2FdaisyUI.png?alt=media&token=453cf42f-9ff9-4a5c-9f28-3af49eefb854">
</a>
<a href="https://firebase.com">
  <img src="https://firebasestorage.googleapis.com/v0/b/tracking-tool-777.appspot.com/o/assets%2Ffirebase.png?alt=media&token=36a6b287-602f-459a-b657-cdaefc8854e6">
</a>

Go to the [Nuxt 3](https://nuxtjs.org/docs/get-started/installation), [daisyUI](https://daisyui.com/docs/install/), and [Firebase](https://firebase.google.com/docs) documentation to learn more.

## Install

Make sure to install the dependencies:

```bash
# yarn
yarn install

or

# npm
npm install
```

## Create Firebase Project

Create a firebase project at [Firebase Console](https://console.firebase.google.com/).

After the project is created, on firebase console, go to **Project settings** (gear icon on the top left).

Go to **Your apps** and create a web app.

After created, you should see a block of code with your firebase configuration (apiKey, authDomain, etc).

Create a `.env` file on the root directory of the project and add your config as the example below:

```javascript
FIREBASE_API_KEY='AIzaSyD6XHKJz_4OUE3MjBSyUjcfTrAh5uBPt4U'
FIREBASE_AUTH_DOMAIN="tracking-tool-777.firebaseapp.com"
FIREBASE_PROJECT_ID="tracking-tool-777"
FIREBASE_STORAGE_BUCKET="tracking-tool-777.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="621011100680"
FIREBASE_APP_ID="1:621011100680:web:21dd6f2c1504c4b4b61dbd"
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Initialize firebase-tools
```
firebase login
firebase init
```

Type Y for yes.
```
Are you ready to proceed? (Y/n) Y
```

Select Firestore, Hosting, and Storage.
```
Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
 ( ) Remote Config: Configure a template file for Remote Config
 ( ) Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance
 (*) Firestore: Configure security rules and indexes files for Firestore
 ( ) Functions: Configure a Cloud Functions directory and its files
 (*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ( ) Hosting: Set up GitHub Action deploys
 (*) Storage: Configure a security rules file for Cloud Storage
```

Press Enter and choose no if asks you to overwrite the existing file.
```
What file should be used for Firestore Rules? (firestore.rules)
```

Press Enter and choose no if asks you to overwrite the existing file.
```
What file should be used for Firestore indexes? (firestore.indexes.json)
```

This step is important to Hosting to work.
```
What do you want to use as your public directory? (public) .output/public
```

This step is also important to Hosting to work.
```
Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N
```

(Optional) I usually select No.
```
Set up automatic builds and deploys with GitHub? (y/N) N
```

(Optional)
```
File .output/public/404.html already exists. Overwrite? (y/N) N
```

(Optional)
```
File .output/public/index.html already exists. Overwrite? (y/N) N
```

Press Enter and choose no if asks you to overwrite the existing file.
```
What file should be used for Storage Rules? (storage.rules)
```

(Almost) DONE!

You now need to generate the Nuxt static files.
```
npm run generate
```

And deploy everything to firebase.
```
firebase deploy
```
