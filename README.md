# react_native_initial_application
  A powerful react native starter tutorials boilerplate for beginners,  this will help you to  developed  required mobile application development skill set .
  
  
  
  ##Install the global expo-cli tools to the new location by running 
-- npm install expo-cli --global

## Create New App

npx expo-cli init app-name --npm

npx expo-cli init find-restaurants --npm


npx expo-cli init my-blog --npm

## start App

npm start

-- Generate Build

keytool -genkey -v -keystore my_first_mobile_app.keystore -alias my_first_mobile_app -keyalg RSA -keysize 2048 -validity 10000


E:\react_native_applications\rn-starter>keytool -genkey -v -keystore my_first_mobile_app.keystore -alias my_first_mobile_app -keyalg RSA -keysize 2048 -validity 10000
Enter keystore password:
Re-enter new password:
What is your first and last name?
  [Unknown]:  Amarjeet
What is the name of your organizational unit?
  [Unknown]:  exam my self
What is the name of your organization?
  [Unknown]:  EMS
What is the name of your City or Locality?
  [Unknown]:  Noida
What is the name of your State or Province?
  [Unknown]:  UP
What is the two-letter country code for this unit?
  [Unknown]:  in
Is CN=Amarjeet, OU=exam my self, O=EMS, L=Noida, ST=UP, C=in correct?
  [no]:  yes

Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
        for: CN=Amarjeet, OU=exam my self, O=EMS, L=Noida, ST=UP, C=in
[Storing my_first_mobile_app.keystore]

-----------------------
mv my_first_mobile_app.keystore /android/app


##REACT NAVIGATION FIX



Important Message about React Navigation v5
This project will be using the v4 version of React Navigation and not the v5 version which was released a few months ago. To date, this code still works as expected. The v4 version is still important to know and understand as it is used widely in existing codebases in many organizations. Stephen is aware of the interest in an update and will hopefully post a supplement at some time in the future. In the meantime, I highly encourage you to continue on with the course as it is so that you fully understand how React Navigation works. Once you have finished the course, you can use this is a self-study opportunity to attempt a migration of your finished working projects to v5. The docs provide some great resources on this: https://reactnavigation.org/docs/upgrading-from-4.x/.

##1. React Navigation v4 Installation
note: You cannot mix Yarn and npm in the same project as it will break your dependencies. You must consistently use the same package manager. If you have yarn installed on your computer it will be used by default to generate the project. In this case, you must use Yarn to install your dependencies.

##1. Install React Navigation

##-->> https://reactnavigation.org/docs/4.x/getting-started/

npm install react-navigation



##2. Install Dependencies

  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
  
  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

##3. Install React Navigation Stack

npm install react-navigation

npm install react-navigation-stack @react-native-community/masked-view

npm install react-navigation-stack @react-native-community/masked-view



##4. Start the app and clear cache with 

    expo r -c

## 2. Update Imports
Our imports in the upcoming lecture will now look like this:

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
Errors?
If you are still struggling with the React Navigation installation then there are likely some major dependency conflicts in your environment. In this case, we've made a boilerplate available so that you can continue with the course. Download the zip file attached to this lecture to somewhere in your C:\Users directory (Windows) or /Users directory (macOS)

Then, run npm install and then npm start.

React Navigation v4 Docs:
https://reactnavigation.org/docs/4.x/getting-started

## To Work with API
npm install axios
3

################# Create Local Server ::

mkdir jsonServer

cd jsonServer

npm init
{complete required details}

npm i json-server ngrok   // help to create a json server on local matchin

---------------

## react-native-maps

npx expo-cli install react-native-maps
