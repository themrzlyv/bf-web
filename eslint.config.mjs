import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // ignore rules
  {
    ignores: ["./next/*", "./**/*.test.tsx", "./**/*.test.ts"],
    rules: {
      "react/prop-types": 0,
      "@typescript-eslint/no-require-imports": 0,
      "@typescript-eslint/no-empty-object-type": 0,
    },
  },
];
