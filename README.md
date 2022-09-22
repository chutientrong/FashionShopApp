# FASHION SHOP MOBILE APPLICATION

DESIGN FASHION SHOP MOBILE APPLICATION IN 10 DAYS WITH 66 SCREENS 

## UI

Designed in [Figma - UI](https://www.figma.com/file/C94iBK6UXIVx7ZSs2nZqib/E-Commerce-App-Kit-(Community)?node-id=1%3A84)

## LIBRARIES/FRAMEWORKS

React Native, Expo, Redux, 


## Setup Environment
### 1. NodeJs
[Link download](https://nodejs.org/en/)
### 2. npm 
Open terminal type
```bash
npm install -g npm
```
### 3. React Native
[Link setup](https://reactnative.dev/docs/environment-setup)
> **Note**
> Have 2 options to setup (requiment option b, but i'am using option a)
#### a. Expo
Download [Expo Go](https://expo.dev/client) in your phone or emulator ([Bluestack](https://www.bluestacks.com/vi/index.html), [LDPPlayer](https://vn.ldplayer.net/) (i'm using))
#### b. React Native CLI
* Install [openjdk11](https://jdk.java.net/archive/) - roll down to version 11 and choose option for your type OS
Or choose this links blow 
  - [windows](https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_windows-x64_bin.zip), 
  - [mac](https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_osx-x64_bin.tar.gz), 
  - [linux](https://download.java.net/java/GA/jdk12/33/GPL/openjdk-12_linux-x64_bin.tar.gz)
* Setup 
> - It's too many steps, so i can't write here
> - Follow tab named React Native CLI Quickstart in [Link] (https://reactnative.dev/docs/environment-setup) to Setting up

## How To Use
To clone and run this application, you'll need [Git](https://git-scm.com) 

1. Clone this repository
  ```bash
  $ git clone https://github.com/chutientrong/FashionShopApp
  ```
2. Go into the repository
  ```bash
  $ cd FashionShopApp
  ```
3. Intall dependencies through `npm`
  ```bash
  $ npm install
  ```
> Or you can install through yarn. 
  - Before you need install yarn
    ```bash
    npm install --g yarn
    ```
  - then 
    ```bash
    $ yarn
    ```
4. Run the app
  ```bash
  $ npm start
  ```
## Build App Release
### Install EAS
See doccument in [EAS Setup](https://docs.expo.dev/build/setup/)
### Build 
Type in terminal
```bash
eas build -p android --profile release 
```

## PACKAGES USED

- @react-navigation
- axios
- react-redux
- redux-thunk
- redux-persist
- @react-native-async-storage
- react-native-vector-icons
- react-native-svg
- react-native-gesture-handler
- react-native-dropdown-picker
- rn-range-slider
- react-native-popup-menu
- react-native-reanimated
- react-native-safe-area-context
- sprintf-js
