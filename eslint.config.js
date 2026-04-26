import reactHooksPlugin from "eslint-plugin-react-hooks";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser APIs
        console: "readonly",
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        AbortController: "readonly",
        AbortSignal: "readonly",

        // Node.js APIs
        process: "readonly",
        Buffer: "readonly",

        // React
        React: "readonly",
      },
    },
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // ============== REACT HOOKS RULES ==============
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ============== CODE QUALITY RULES ==============
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",

      // ============== BEST PRACTICES ==============
      "no-var": "error",
      "prefer-const": "warn",
      eqeqeq: ["warn", "always"],
      "no-implicit-coercion": "warn",
      "no-empty": "warn",
      "no-fallthrough": "warn",
      "no-unreachable": "warn",
      "no-duplicate-case": "error",
      "no-dupe-keys": "error",
      "no-with": "error",
      "no-new-func": "warn",

      // ============== ERROR PREVENTION ==============
      "no-inner-declarations": "warn",
      "no-constant-condition": "warn",
      "valid-typeof": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-obj-calls": "error",
      "no-prototype-builtins": "warn",
      "no-sparse-arrays": "warn",

      // ============== LOGIC & CONTROL FLOW ==============
      "no-self-assign": "warn",
      "no-self-compare": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-extra-boolean-cast": "warn",
      "no-regex-spaces": "warn",

      // ============== ASYNC & PROMISES ==============
      "require-await": "warn",

      // ============== STYLE & FORMATTING ==============
      "no-multiple-empty-lines": ["warn", { max: 2 }],
      "no-trailing-spaces": "warn",
    },
  },
];
