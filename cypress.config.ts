import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // baseUrl: "http://localhost:3000" ,
    baseUrl: "http://localhost:3001",
    supportFile: "cypress/support/e2e.ts",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
  },
});
