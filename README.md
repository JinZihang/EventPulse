# Introduction

# Setup

1. Clone this repository to your local workspace by running `git clone git@github.com:JinZihang/DreamProject.git` in terminal.
2. Install [Homebrew](https://brew.sh/) by running `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`.
3. Install [Node.js](https://nodejs.org/en/download/) by running `brew install node`.
4. Install [Yarn](https://yarnpkg.com/) by running `brew install yarn`.
5. Install Watchman by running `brew install watchman`.
6. Run `yarn` to install all node modules.
7. Go to the `ios` directory and run `pod install` to install all CocoaPods' dependencies. Note that Mac M1 architecture is not directly compatible with CocoaPods. If you encounter issues related to CocoaPods, try running:

- `sudo arch -x86_64 gem install ffi`
- `arch -x86_64 pod install`

## For iOS Development

1. Install [Xcode](https://apps.apple.com/sg/app/xcode/id497799835?mt=12) from Apple's App Store.
2. Open Xcode, go to `Xcode Preferences` > `Locations`, and select the most recent version in the `Command Line Tools` dropdown.
3. Run `yarn start` to start Metro.
4. Run `yarn ios` to start the application in the iOS emulator.

## For Android Development

1. Run `brew tap homebrew/cask-versions` and `brew install --cask zulu11` to install the [Azul Zulu](https://www.azul.com/downloads/?package=jdk) OpenJDK.
2. Download and install [Android Studio](https://developer.android.com/studio).
3. Go to `Tools` > `SDK Manager` > `SDK Platforms`, check `Show Package Details`. Under Android 12.0 (S), make sure the following items are checked:

- `Android SDK Platform 31`
- `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image` or (for Apple M1 Silicon) `Google APIs ARM 64 v8a System Image`

4. Go to `SDK Tools` and check `Show Package Details`. Expand `Android SDK Build-Tools` and make sure `31.0.0` is checked.
5. Finally, click `Apply` to download and install the Android SDK and related build tools.
6. Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using zsh then `~/.zprofile` or `~/.zshrc`) config file:

- `export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk`
- `export PATH=$PATH:$ANDROID_SDK_ROOT/emulator`
- `export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools`

7. Open the `android` directory in Android Studio, click `Device Manager` at the top right corner, select `Create Virtual Device` to add Android devices for testing.
8. Run `yarn start` to start Metro.
9. Run `yarn android` to start the application in the Android emulator.
10. If you run into the `:app:installDebug failed` issue, try assigning a bigger storage to the virtual device at Android Studio's `Device Manager` > `Device Name` > `Edit` > `Show Advanced Settings` > `Internal Storage`.

## Note

- After setting up the environment, if you want to clone again to start fresh for some reason, you only need to run `yarn` and `pod install` to install all dependencies.
- Always keep the main branch error-free. Develop on a new branch by running `git checkout -b <local_working_branch_name> <base_branch_name>`. Then send this new branch to remote by running `git push --set-upstream origin <remote_working_branch_name>`. Normally, you should use same name for your local branch and remote branch to avoid confusion. For the branch name, use `developer/case-description`, for example, `zihangj/feature-login_and_logout`, and `zihangj/migration-jest_to_cypress`. Always develop test scripts if applicable (unit, integration, E2E). After testing your branch, create a pull request using the template and request for reviews to get your branch merged.
- Please actively document information.

# TODOs

1. Discuss the UI/UX design for the whole application
2. Consider the sizing issue on differnt screen sizes
3. Style the settings screen
4. Style the not-logged-in screens

After implementing database:

1. Update login steps
2. Update register steps
3. Add tests
4. Update setting adjustment steps
5. Add more seting options
