import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  // 全局忽略
  {
    ignores: [
      'dist',
      'scripts',
      // VS Code ESLint 扩展对 css/html 显式执行 lint 时，无匹配配置会报 "File ignored" 警告
      '**/*.css',
      '**/*.html',
    ],
  },

  // 基础推荐规则
  js.configs.recommended,

  // TypeScript 推荐规则
  ...tseslint.configs.recommended,

  // 项目自定义配置
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'objectLiteralProperty',
          format: ['camelCase'],
          filter: {
            // Allow MUI sx nested selectors like '& .MuiStepConnector-line'
            regex: '^&\\s|Mui[A-Z]|\\.[A-Z]',
            match: false,
          },
        },
        // 导出的 interface / type 必须 PascalCase
        {
          selector: ['interface', 'typeAlias'],
          format: ['PascalCase'],
          modifiers: ['exported'],
        },
        // 导出的常量：如果是 SCREAMING_SNAKE_CASE 格式则校验正确性
        {
          selector: 'variable',
          modifiers: ['exported', 'const'],
          format: ['UPPER_CASE'],
          filter: {
            regex: '^[A-Z][A-Z0-9]*(_[A-Z0-9]+)*$',
            match: true,
          },
        },
        // 导出的常量：允许 camelCase 和 PascalCase（运行时实例、组件等）
        {
          selector: 'variable',
          modifiers: ['exported', 'const'],
          format: ['camelCase', 'PascalCase'],
          filter: {
            regex: '^[A-Z][A-Z0-9]*(_[A-Z0-9]+)*$',
            match: false,
          },
        },
        // 未导出的常量用 camelCase
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'PascalCase'],
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@mui/material',
              message: '请使用路径导入，例如: import Button from "@mui/material/Button"',
            },
            {
              name: '@mui/icons-material',
              message: '请使用路径导入，例如: import Add from "@mui/icons-material/Add"',
            },
          ],
          patterns: [
            {
              group: ['../**', '**/../*'],
              message:
                '禁止使用 .. 相对路径导入，请使用 api/components/containers/models/store 别名',
            },
          ],
        },
      ],
    },
  },

  // Prettier 规则（必须放在最后，覆盖上方冲突规则）
  eslintConfigPrettier,
];
