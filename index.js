/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { MagicBellProvider } from "@magicbell/react-headless";
import PushNotification from "react-native-push-notification";

const theme = { "icon": { "borderColor": "#6113A3", "width": "24px" }, 
    "unseenBadge": { "backgroundColor": "#DF4759" }, 
    "header": { "backgroundColor": "#6113A3", "textColor": "#ffffff", "borderRadius": "16px" }, 
    "footer": { "backgroundColor": "#6113A3", "textColor": "#ffffff", "borderRadius": "16px" }, 
    "notification": { 
        "default": { "textColor": "#15091F", "borderRadius": "8px", "backgroundColor": "#6113A3" }, 
        "unseen": { "backgroundColor": "#6113A3" }, 
        "unread": { "backgroundColor": "#6113A3" } 
    } 
};

PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
  
      // process the notification
  
      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  
    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
  
      // process the action
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
});

const MagicApp = () => {
    return (
        <MagicBellProvider
            apiKey="7c7b785d14cb5bdf6dbed2c28765da5adbc0347f"
            userEmail="malikabdulazizakbar@gmail.com"
            theme={theme}
            locale="en">
            <App />
        </MagicBellProvider>
    );
}


AppRegistry.registerComponent(appName, () => MagicApp);
