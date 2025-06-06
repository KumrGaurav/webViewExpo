# Expo Mobile Application

[![Expo](https://img.shields.io/badge/Expo-49.0.0-black?logo=expo)](https://expo.io/)
[![React Native](https://img.shields.io/badge/React_Native-0.72.3-blue?logo=react)](https://reactnative.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-9.23.0-orange?logo=firebase)](https://firebase.google.com/)

A cross-platform mobile application featuring:

- WebView integration with Next.js web app
- Firebase Cloud Messaging (FCM) push notifications
- Google authentication via WebView
- Android and iOS support

## Features

- 🌐 Embedded Next.js web app via WebView
- 🔔 Native push notifications with FCM
- 📱 Optimized for both Android and iOS
- 🔄 Bi-directional web-mobile communication
- 🔐 Secure authentication flow

## Prerequisites

- Node.js v18+ and npm v9+
- Expo CLI (`npm install -g expo-cli`)
- Firebase project (for FCM)
- Android Studio/Xcode (for emulators)
- Physical device with Expo Go app (optional)

## Installation

1. Clone the repository (if separate from web app):
```bash
git clone https://github.com/your-username/your-mobile-repo.git
cd your-mobile-repo
Install dependencies:

bash
npm install
npx expo install @react-native-firebase/app @react-native-firebase/messaging
Set up Firebase:

Download google-services.json from Firebase Console

Place it in your project root

Update app.json:

json
{
  "expo": {
    "plugins": [
      "@react-native-firebase/app",
      [
        "@react-native-firebase/messaging",
        {
          "messagingAndroidHeadlessTaskTimeout": 30000
        }
      ]
    ]
  }
}
Running the Application
Development Mode
bash
npx expo start
Press a for Android emulator

Press i for iOS simulator

Scan QR code with Expo Go app (physical devices)

Connecting to Web App
Ensure your Next.js dev server is running:

bash
# In web app directory
npm run dev -- --host 0.0.0.0
Update WebView URL in App.js:

javascript
<WebView 
  source={{ uri: 'http://YOUR_LOCAL_IP:3000' }}
/>
Build & Deployment
Android APK
bash
npx expo prebuild --clean
npx eas build -p android
iOS IPA
bash
npx expo prebuild --clean
