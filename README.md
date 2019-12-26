# Is Device Mobile?

## Installation

Install the component in your project with the following command:

```Bash
yarn add is-device-mobile
```

## Usage

```JS
import { isMobile } from 'is-device-mobile';

const getDeviceType = () => {
  return isMobile(window) ? "mobile" : "desktop";
};
```

In order to work, `isMobile` requires `window` as argument.

## Resources

This utility follows [Mozilla browser detection guidelines](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
