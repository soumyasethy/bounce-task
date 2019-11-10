# Bounce Task React Native

## _Features_

- Built with `react-native v0.61.2`
- MobX, HOC, Hooks, Pure Components, Stateless Components
- Supports SVG Image as Component
- Responsive Screen
- Splash screen with logo


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
1. Xcode -> product -> Scheme -> Edit Scheme -> Change Build Configuration Relase -> connect your phone & run
```

