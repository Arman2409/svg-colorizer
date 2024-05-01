import commonFunctions from "./src/common/main";

// Check if running in a browser environment (document object exists)
const isBrowser = typeof document !== 'undefined';

let conditionalModule = {};

if (isBrowser) {
  conditionalModule = await import('./src/client/main');
} else {
  conditionalModule = await import('./src/node/main');
}

export default {
  ...commonFunctions,
  ...conditionalModule,
};
