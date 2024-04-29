// Check if running in a browser environment (document object exists)
const isBrowser = typeof document !== 'undefined';

let exportModule = {};

if (isBrowser) {
  exportModule = await import('./src/client/main');
} else {
  exportModule = await import('./src/node/main');
}

export default exportModule;
