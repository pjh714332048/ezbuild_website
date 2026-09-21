import { execSync } from 'child_process';

const run = cmd => execSync(cmd, { stdio: 'inherit' });

try {
  run('eslint --max-warnings=0 .');
  run('tsc -b');
  run('vite build');
} catch {
  process.exit(1);
}
