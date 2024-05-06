import commonFunctions from "./src/common/index";

// Check if running in a browser environment (document object exists)
const isBrowser = typeof document !== 'undefined';

let conditionalModule = {};

if (isBrowser) {
  conditionalModule = await import('./src/client/index');
} else {
  conditionalModule = await import('./src/node/index');
}

export default {
  ...commonFunctions,
  ...conditionalModule,
};
