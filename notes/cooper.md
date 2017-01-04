# Tips for Ionic Testing

* sudo npm install -g cordova

* $ ionic platform add ios
* $ ionic platform add android

## Basic ways to test
```
Bad: Ionic serve
Better: Ionic serve --lab
Better: Ionic View
Best: Testing on the device
```

# Device Testing on iOS
### Installation
1. Download Xcode
1. Sign up for a developer account
1. Make changes to your app, run cordova prepare
1. Open the project in Xcode (After cordova prepare, this should be
Xcode - build and run onto device
You still probably won’t see logs

## To read logs using Safari
#### Desktop setup
1. Open Safari
1. Click Safari > Preferences > Advanced
1. Show Develop Menu - On
1. Now while running from Xcode, your device will appear in the Develop menu in Safari
1. You can select that device and open the logs

#### Device setup
1. Open settings
1. Safari > Advanced > Web Inspector - On



#### Device Testing on Android

### Installation
1. Download Android Studio [Download Here](https://developer.android.com/studio/index.html)
1. Download the JDK [Download Here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
1. Set env variables to include $ANDROID_HOME in the install location
  * export ANDROID_HOME={YOUR_PATH}
  * Mine is /Library/Android/sdk
  * Check this with the terminal command env or echo $ANDROID_HOME
  * Set $PATH variables for Android Tools and Platform Tools
    * This gives you access to cool commands like adb and monitor
    * $ export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
* On your Android device, turn developer mode on
  * Settings > System > About Device > Tap Build Number until dev mode turns on
  * Now in Settings > System you can see Developer options
* In Developer options turn USB debugging on
  * Under USB configuration, make sure you aren’t using MTP (Media Transfer Protocol). I use Charging. Your device may not be discovered on your Mac if it’s in MTP mode.
* Connect your Android device by USB
* Use $ adb devices and confirm that there is a device connected
* Run $ cordova prepare
* Then $ ionic android run -l -c
  * This will give you live-reload (-l) on your device when making changes and allow the server to print any console logs (-c).
* From here you can open Chrome >
Dev Tools > (Three Vertical Dot Menu Thing) > Remote Devices > Your Device > Inspect
* Now you can view a mirror of your device

# Test Fairy
Once you’re happy with your app with these techniques, use Test Fairy to provision the app to other user’s devices for further testing. Test Fairy is free tool that allows users to give you their device id just by opening an email on their phone. Then once you add it to your provisioning profile, that user can download your app via email.

https://testfairy.com/


# Other good tips!

#### Use the Ionic template starters
* $ ionic start app_name [template]
* [tabs](https://github.com/driftyco/ionic-starter-tabs)
* [sidemenu](https://github.com/driftyco/ionic-starter-sidemenu)
* [blank](https://github.com/driftyco/ionic-starter-blank)

#### Ionic Help Command
* Check out the terminal command ionic help

#### Splash Screens and icons
* Place a .png, .psd, or .ai file in your resources directory
* $ ionic resources
* Generates all necessary icons and loading screens

#### Remember! Some elements will create an isolate scope, including ng-if and ionic-content

#### Cordova Plugins
* Visible with $ cordova plugin
* $ cordova plugin add plugin_name

#### License Problems
* If you have an error during build where ionic build tools want you to accept a license agreement try this:
  * $ mkdir "$ANDROID_SDK/licenses" || true
  * $ echo -e "\n8933bad161af4178b1185d1a37fbf41ea5269c55" > "$ANDROID_SDK/licenses/android-sdk-license"
* You may also need this one:
  * $ echo -e "\n84831b9409646a918e30573bab4c9c91346d8abd" > "$ANDROID_SDK/licenses/android-sdk-preview-license"

#### Platform Specific CSS
* Ionic has platform specific css classes. Use them like this -
```
.platform-ios .messageIcon {
    float: right;
    margin-top: 5px;
    color: #a3a3a3;
}
.platform-android .messageIcon {
    float: left;
    Margin-top: 15px;
    color: red;
}
.platform-browser .messageIcon {
    float: left;
    Margin-top: 25px;
    color: blue;
}
```

#### Remember! If you’re pinging a server on localhost on your mac, the device will not be able to connect to it!

#### Run Sass
* Write your sass in the file /scss/ionic.app.scss
* $gulp watch
* will compile all your CSS code into www/css/ionic.app.min.css

#### Keep web code and mobile app code separate
* (My opinion) This can work, but it's easier to stay organized if they're separate, especially during galvanize project time.


If you have any questions, or I can help you with anything let me know! I’m on slack, and you can email me whenever at [Cooper.Heinrichs@gmail.com](Cooper.Heinrichs@gmail.com)
