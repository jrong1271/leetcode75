import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8", // or 'c8'
      reporter: ["text", "json", "html"], // Specify coverage formats
      include: ["src/**/*.ts"], // Define which files should be included in coverage
      exclude: ["node_modules", "test", "dist", "lib"], // Exclude files
      reportsDirectory: "./coverage", // Set custom output path
    },
  },
});
