# Use Jest

Regarding the concept of developing tests for a react native application, please refer to [react native's official documentation](https://reactnative.dev/docs/testing-overview).

To run jest tests, simply use `yarn jest`.

## Setup

Jest might require certain setup steps for certain packages. Currently, Jest has been setup for react navigation and async storage. However, in the future, while adding `react-native-reanimated` or `react-native-gesture-handler` for react navigation, you will need to do further setup like [this](react-native-gesture-handler).

## Organizing Tests

- For a unit test that runs against specific lines of code in a file, put it next to that file and naming it like this:

```
> ComponentName.tsx
> ComponentName.test.js
```

- For integration tests and E2E tests, since they are not specific to a certain file, structure them like this:

```
> root
  > tests
    > integration
      > renderActivityList.test.js
    > e2e
      > registerAndLogin.test.js
```
