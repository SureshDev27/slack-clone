// Compatibility bridge: allow running `node .` or tools that expect `index.js`.
// This simply imports the real entry at ./src/server.js which starts the server.
import './src/server.js';
