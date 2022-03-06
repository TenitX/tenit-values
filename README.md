# tenit-values
Typescript/Javascript client library for interacting with the Tenit Values tool for continuous configuration

### React Native
Looking to use tenit values in your react native project? Check out the dedicated [react native library](https://github.com/TenitX/tenit-values-react-native)

## Installation 
```bash
# Yarn
yarn add tenit-values

# NPM
npm install tenit-values
```

## Usage
As early in your web app's lifecycle you'll want to initialize the library with the `init()` function. For most, this will be in the `App.js` file of your project.
```js
import * as Values from "tenit-values";


Values.init("yourApiKey", "yourCoordinateValue", ["LIST", "OF", "VALUES", "TO", "LOAD"]);

```

At the moment the typescript library supports 3 types, `String`, `Number` and `Boolean`, and they are all accessed in a similar fashion:
```js
import * as Values from "tenit-values";

// String
Values.getString("MY_VALUE", "fallback string");

//Number
Values.getNumber("MY_VALUE", 0);

//Boolean
Values.getBoolean("MY_VALUE", false);

```

## Tenit Values
Not yet using Tenit Values to power continous configuration in your apps? Check out https://values.tenitx.com