import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig: Config = {
  preset: "ts-jest",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig returns an async function that returns a Jest config
module.exports = createJestConfig(customJestConfig);
