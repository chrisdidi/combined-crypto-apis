const fs = require('fs');

const libRoot = `${__dirname}/../lib`;

const packageJson = require('../package.json');

packageJson.private = false;

delete packageJson.scripts;

const libPackageJson =
  JSON.stringify(
    packageJson,
    (key, value) => {
      if (typeof value === 'string' && value.startsWith('./lib/')) {
        const parts = value.split('/');
        parts.splice(1, 1);
        return parts.join('/');
      }
      return value;
    },
    2,
  ) + '\n';

fs.writeFileSync(`${libRoot}/package.json`, libPackageJson);
