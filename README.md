# Bounce Task React Native

> React Native Component Library v1.0

## _Features_

- Built with `npm init`
- Runs with lightening fast `facebook's watchman`
- Configured _React v16.9.0, React-Native v0.60_ as peer dependency
- Auto Linking after adding any npm package so don't run link cmd using react-native link

## _Getting started_
### Installing Dependency
```
1. yarn or npm i
2. cd ios
3. pod install
4 cd ..
```
### Running Android App in Debug Mode
```
react-native run-android 
```
### Running iOS App in Debug Mode
```
react-native run-ios 
```
## _Running Android in Release Build
### Generate .apk file
```
1. cd andorid
2. ./gradlew assembleRelease
3. Multiple Build is enabled to reduce app size based cpu architecture with universal apk file as well.
```
### Generate Bundle file
```
1. cd andorid
2. ./gradlew bundleRelease
```
### To Test Bundle file
```
1. cd ..
2. react-native run-android --variant=release
```

## _Running iOS App in Release Build
```
1. Xcode -> product -> Scheme -> Edit Scheme -> Change Build Configuration Relase
```

