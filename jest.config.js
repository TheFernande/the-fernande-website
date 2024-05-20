const nextJest = require("next/jest");

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: "./" });

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/index.ts",
    "!src/**/robots.ts",
    "!src/**/sitemap.ts",
    "!src/**/*.stories.tsx",
    "!src/**/*.types.ts",
    "!**/node_modules/**"
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["clover", "json", "lcov", "html", "text-summary"],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      statements: 80,
      lines: 80,
      branches: 45,
      functions: 70
    }
  },

  // testResultsProcessor: "jest-sonar-reporter",

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@/helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/layouts/(.*)$": "<rootDir>/src/layouts/$1",
    "^@lib$": "<rootDir>/src/lib/*",
    "^@public$": "<rootDir>/public/*",
    "^@/stores/(.*)$": "<rootDir>/src/stores/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/test-utils/(.*)$": "<rootDir>/src/test-utils/$1",
    "^@/types/(.*)$": "<rootDir>/src/types/$1",
    "^@/widgets/(.*)$": "<rootDir>/src/widgets/$1"
  },

  // A list of paths to modules that run some code to configure or set up the testing environment.
  setupFiles: ["<rootDir>/src/test-utils/prepare.ts"],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/src/test-utils/setupTests.ts"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],

  // Indicates whether each individual test should be reported during the run
  verbose: true
};
// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(config);
