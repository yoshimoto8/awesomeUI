import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import StorybookUIRoot from "./storybook";

const isUsingStorybook = true;
// const isUsingStorybook = false;
const rootComponent = isUsingStorybook ? StorybookUIRoot : App;
AppRegistry.registerComponent(appName, () => rootComponent);
