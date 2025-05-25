import messaging from "@react-native-firebase/messaging";
import { getApps, initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import "react-native-reanimated";
import { WebView } from "react-native-webview";

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  return authStatus === messaging.AuthorizationStatus.AUTHORIZED;
}

async function getFCMToken() {
  const token = await messaging().getToken();
  console.log("FCM Token:", token);
  return token;
}

const firebaseConfig = {
  apiKey: "AIzaSyD5oJoi9muwrn9c96MLkVrLv-M7G--kkLk",
  authDomain: "auth-e9325.firebaseapp.com",
  projectId: "auth-e9325",
  storageBucket: "auth-e9325.firebasestorage.app",
  messagingSenderId: "33472507836",
  appId: "1:33472507836:web:c153a7e7d65689a6bf45b9",
  measurementId: "G-N0JPMDLLLY",
};

export default function RootLayout() {
  useEffect(() => {
    if (getApps().length === 0) {
      initializeApp(firebaseConfig);
    }

    requestUserPermission().then((hasPermission) => {
      if (hasPermission) getFCMToken();
    });

    // Foreground notifications
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log("Foreground notification:", remoteMessage);
    });

    // Background notifications
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Background notification:", remoteMessage);
    });

    return unsubscribe;
  }, []);

  const [url, setUrl] = useState('http://192.168.0.103:3000/'); // Your local IP
  const { width, height } = useWindowDimensions();

  return (
    <WebView
      source={{ uri: url }}
      style={{ width, height }}
      onError={(error) => console.log('WebView error:', error)}
      onHttpError={(error) => console.log('HTTP error:', error)}
      startInLoadingState={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      mixedContentMode="compatibility"
    />
  );
}
