import fs from 'fs';
import path from 'path';

/* eslint-disable import/no-dynamic-require */
export default function registerRoutes(directory, app) {
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.resolve(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      registerRoutes(fullPath, app);
    } else if (file.endsWith('.js')) {
      // eslint-disable-next-line global-require
      const route = require(fullPath);
      app.use('/api', route);
    }
  });
}
