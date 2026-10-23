# 项目开发规则

本文件移植自同级 `ezbuild_model_system_web/AGENTS.md`，按官网实际目录调整。
以下规则适用于本项目所有新增和修改的代码；保留与当前任务无关的已有改动。

## 项目结构与验证

- 技术栈：React、TypeScript、Vite、MUI、Redux Toolkit / RTK Query，使用 pnpm。
- `src/main.tsx` 为入口；`src/containers/` 为业务页面；`src/components/` 为通用组件。
- 使用项目配置的路径别名，禁止使用 `../` 跨目录相对导入；MUI 使用子路径导入。
- 遵循现有 ESLint、Prettier 配置（包括分号和导入排序）。
- 清理模块前检查静态导入、动态导入、store 注册及脚本引用；静态资源还需核对动态拼接路径。
- 修改依赖时同步 `pnpm-lock.yaml`。完成代码修改后运行 `pnpm build`（包含 ESLint、TypeScript 和 Vite 构建）；修改的源文件运行 Prettier 检查。

## 1. 使用函数式编程

- 使用函数组合和小型、职责单一的函数组织逻辑，避免使用类和继承。
- 优先使用纯函数，相同输入应产生相同输出；将网络请求、存储等副作用与数据处理逻辑分离。
- 保持数据不可变，避免直接修改入参、共享对象或状态；通过创建新对象或数组完成更新。
- 优先使用 `map`、`filter`、`reduce` 等方法表达数据转换。
- 数组原生方法（如 `map`、`filter`、`reduce`、`includes`、`Array.from`）能够满足需求时，直接使用原生方法，无需替换为 Lodash。
- 原生方法没有直接对应能力时，若项目已引入 Lodash，优先复用其方法；本项目当前没有该依赖，不为满足此条规则单独引入。

## 2. 统一使用箭头函数

- 所有函数均使用箭头函数，包括组件、工具函数、回调和异步函数。
- 禁止使用 `function` 声明、`function` 表达式和对象方法简写；对象中的函数属性也使用箭头函数。
- 命名函数使用 `const` 绑定，例如 `const getName = () => name;`。
- 异步函数使用 `const fetchData = async () => { ... };`。

## 3. 统一使用 async/await 处理异步

- 所有异步操作统一使用 `async/await`，禁止使用 `.then()` 链式处理。
- 异步错误处理使用 `try/catch`，清理逻辑使用 `try/finally`，不使用 Promise 的 `.catch()` 或 `.finally()` 链式处理。
- 并发异步操作使用 `await Promise.all(...)` 等方式处理。
- 无法等待的事件或 effect 入口，应调用内部已处理错误的异步函数；async IIFE 本身不能处理 Promise 拒绝。

## 4. Redux slice 和 selector 风格

- 以 `src/store/slices/dialogController/` 为参考，每个状态模块按 `<name>Slice.ts`、`selectors.ts`、`types.ts` 拆分。
- 在 `types.ts` 中使用具名导出的 interface 定义 `<Name>State`；业务模型复用 `src/models/` 中的类型。
- 在 `<name>Slice.ts` 中定义带状态类型的 `initialState`；需要从存储读取初始状态时，使用返回该状态类型的惰性初始化箭头函数。
- 使用 `export const <name>Slice = createSlice(...)` 具名导出 slice，并从 `<name>Slice.actions` 解构、具名导出 action；store 通过 `<name>Slice.reducer` 注册 reducer，不默认导出 reducer。
- reducer 使用箭头函数，通过对象展开返回新状态，使用 `PayloadAction<T>` 声明 payload 类型；存储、请求等副作用放在 reducer 外部。
- 在 `selectors.ts` 中导入对应 slice 和状态类型，通过 `const { name } = <name>Slice` 获取状态键，并定义局部 `interface State { [name]: <Name>State; }`，避免依赖全局 `RootState`。
- selector 使用 `export const selectXxx = (state: State) => state[name].xxx` 的形式，简单返回值由 TypeScript 推导类型。

## 5. 共享业务枚举

- 官网当前没有 `src/generated/`、`src/models/businessEnums.ts` 或 Proto 同步流程，不套用 system_web 的后端路径和同步命令。
- 当前业务枚举和选项统一维护于 `src/models/`，不要在组件或接口层重复维护编号和选项。
- 后续接入共享协议时，前端仅作为生成枚举的使用方，不手工修改生成代码；在接入时记录真实协议来源及同步方式。
- 共享协议已有编号不得重排或复用；删除项使用 `reserved`，已有 REST 字符串映射应保持兼容。
- 页面临时交互状态、HTTP 状态码不属于共享业务枚举。

## 6. 禁止使用 `let`

- 所有变量声明统一使用 `const`，禁止使用 `let`。
- 需要重新赋值的场景（如循环计数器、累加器等），通过 `reduce`、`map` 等函数式写法处理。
- 遍历使用 `for (const item of items)` 或数组方法；`useRef` 仅用于确实需要跨渲染保存的可变引用，不用于绕过变量声明限制。

## 7. 禁止使用 `void`

- 禁止在函数返回类型注解中显式写 `void`，让 TypeScript 自动推导返回类型。
- 禁止使用 `void` 操作符来忽略 Promise 返回值；改用 `await`，或调用内部包含错误处理的 async 函数。
- 例外：RTK Query 的 `build.query<T, void>` / `build.mutation<T, void>` 中的 `void` 泛型参数是框架类型系统的约定用法，允许保留。

## 8. 单文件不超过 300 行

- 单个源文件（`.ts` / `.tsx`）不超过 300 行。
- 超过时按职责拆分为更小的组件、hooks 或工具文件。

## 9. 数据模型存放于 `src/models/`

- `src/models/` 是数据层的统一目录，存放业务类型定义、接口、业务枚举、mock 数据等。
- 组件目录（`containers/`、`components/`）中不应存放纯数据文件或 mock 数据。
- mock 数据统一放在 `src/models/mock/` 子目录下。
- 组件 Props 可与组件同文件；slice 状态类型遵循第 4 节。

## 10. useEffect 的异步与错误处理

- effect 回调必须是同步函数，声明为 `async` 会返回 Promise、破坏清理函数语义。
- 异步副作用在 effect 中定义独立的 async 箭头函数并调用，`try/catch` 放在该 async 函数内部；不使用 `.catch()` 链式处理。
- 外层同步 `try/catch` 不能捕获未等待的 Promise 拒绝，但能捕获同步异常；不要将同步异常处理误判为无效。
- 请求需要通过 AbortController 或清理时失效的标记避免卸载、依赖变更后写入过期结果；取消请求不应提示为业务错误。

## 11. components 目录为通用组件，禁止与 Redux 交互

- `src/components/` 下的文件均为通用组件，不允许有任何与 Redux 交互的地方。
- 禁止导入 `useSelector`、`useDispatch`、`RootState` 等 Redux 相关 API、类型或 store 模块；禁止 dispatch action 或读取 Redux 状态。
- 不通过自定义 hook 间接连接 Redux。
- 与状态相关的行为通过组件 props 传入（回调、状态值），由上层容器（`containers/`）负责连接 Redux。

## 12. 单文件单组件

- 一个文件只能定义一个 Function Component（React 组件）。是否为组件按实际 React 用途判断，不仅依据函数名首字母大写。
- 一个文件只能 `export` 一个 Function Component；非组件的工具函数、类型、常量等不在此限制范围内，但应与组件职责相关且保持文件聚焦。
- 若一个文件需要多个组件协作，按主组件与子组件拆分为独立文件，子组件放在单独文件中 `export`；辅助性的渲染逻辑（如 `renderXxx` 函数）若不构成独立组件，可保留在同一文件。
