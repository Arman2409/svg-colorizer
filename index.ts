import commonFunctions from "./lib/common/index";

// Check if running in a browser environment (document object exists)
const isBrowser = typeof document !== 'undefined';

let conditionalModule = {};

if (isBrowser) {
  conditionalModule = await import('./lib/client/index');
} else {
  conditionalModule = await import('./lib/node/index');
}

export default {
  ...commonFunctions,
  ...conditionalModule,
};
