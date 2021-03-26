## ⚠️ Disclaimer! The @island.is/ui library is not officially release and is only available as an alpha version at the moment. We are going to improve it and provide a better support in the future. Proceed with cautious, things might break.

## Setup

1. Create a new react app

```bash
npx create-react-app my-app --template typescript
```

2. Eject CRA

```bash
yarn eject
```

3. Install `@island.is/ui`

```bash
yarn add @island.is/ui -E
```

Install its required peerDependencies

```bash
yarn add @rehooks/component-size animejs classnames date-fns downshift hypher lodash markdown-to-jsx react react-animate-height react-datepicker react-dropzone react-keyed-flatten-children react-select react-toastify react-use reakit treat@1.6.0 -E
```

> Make sure to install `treat@1.6.0`. It won't work with treat@2.

4. Configure `tsconfig.json`

Update the following options to the `tsconfig.json` file.

```diff
{
  "compilerOptions": {
    ...
-   "strict": true,
+   "strict": false,
    "jsx": "react-jsx",
+   "downlevelIteration": true
  },
  "include": [
    "src"
  ],
+ "exclude": [
+   "node_modules/@island.is"
+ ]
}
```

5. Configure `paths.js` and `webpack.config.js`

We also need to configure babel so it will transpile our `@island.is/ui` library. We need to define first a new path for the library and then whitelist it to the babel module.

`config/paths.js`

```diff
  appNodeModules: resolveApp('node_modules'),
+ appIslandIsUi: resolveApp('node_modules/@island.is'),
  swSrc: resolveModule(resolveApp, 'src/service-worker'),
```

`config/webpack.config.js`

Add the new path created above to the babel module:


```diff
{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
- include: paths.appSrc,
+ include: [paths.appSrc, paths.appIslandIsUi],
  loader: require.resolve('babel-loader'),
}
```

Then, we need to import and use the Treat plugin to handle `treat` files.

```diff
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
+ const TreatPlugin = require('treat/webpack-plugin');
```

```diff
plugins: [
+  new TreatPlugin(),
  // Generates an `index.html` file with the <script> injected.
```

6. Run the development server

```bash
yarn start
```

It will automatically open `http://localhost:3000`

7. Voilà!

![preview](https://user-images.githubusercontent.com/937328/112627694-d7304400-8e29-11eb-8cac-1f5a6aab7cac.jpg)
