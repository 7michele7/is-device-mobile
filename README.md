# Frontend Toolkit - isMobile

## Installation

Install the component in your project with the following command:

```Bash
yarn add @casumo/fe-toolkit-ismobile
```

## Usage

```JS
import { isMobile } from '@casumo/fe-toolkit-ismobile';

const getDeviceType = () => {
  return isMobile(window) ? "mobile" : "desktop";
};
```

In order to work, `isMobile` requires `window` as argument.

## Contribution

1. Open a PR
2. Merge `master` into your branch
3. Merge the PR once it got reviewed
4. Checkout `master` and pull the latest version
5. Bump version running `$ npm version <major|minor|patch>`
6. Git push
7. Login to NPM `$ npm login` if you already have an account, or create one running `npm adduser --registry http://npm.casumotest.local`
8. Publish to NPM `$ npm publish --registry http://npm.casumotest.local`

## Resources

This utility follows [Mozilla browser detection guidelines](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
