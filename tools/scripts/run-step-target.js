const target = process.argv[2];

let name = process.argv[3];
const rest = [...process.argv.slice(4)];
const startsWithDigit = /^\d/;

if (!target || !name) {
  throw new Error('Must supply target and project name');
}

if (startsWithDigit.test(name)) {
  name = 'abc-' + name; // Default prefix = 'abc-'
}

let suffixFilter = name => !name.endsWith('-e2e');

if (target == 'e2e') {
  suffixFilter = name => name.endsWith('-e2e');
}

const { readFileSync } = require('fs');
const { globSync } = require('fast-glob');

const filePaths = globSync('**/project.json');

const matchingNames = [];

for (const filePath of filePaths) {
  const projectContent = JSON.parse(readFileSync(filePath));
  const projectName = projectContent.name;
  if (
    projectContent.projectType === 'application' &&
    suffixFilter(projectName) &&
    (name === projectName || projectName.startsWith(name + '-'))
  ) {
    matchingNames.push(projectName);
  }
}

if (matchingNames.length === 1) {
  const cmd = ['npx', 'nx', target, matchingNames[0], ...rest].join(
    ' '
  );
  const { execSync } = require('child_process');
  execSync(cmd, { stdio: 'inherit' });
} else if (matchingNames.length > 1) {
  console.log(
    'Too many projects match input. Please be more specific!'
  );
  console.table(matchingNames);
  process.exit(1);
} else {
  console.error('cannot find', name);
  process.exit(1);
}
