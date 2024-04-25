/** @type {import('jest').Config} */
const config = {
  automock: false,
  silent: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coveragePathIgnorePatterns: [
    'config',
    'fixture',
    'dist',
    'build',
    'coverage',
    'test',
    'tests',
  ],

  testPathIgnorePatterns: ['config', 'fixture', 'dist', 'build', 'coverage'],
  collectCoverageFrom: [
    '**/*.{ts,js,jsx,tsx}',
    '!**/**/*.(test|spec|config|fixture|mock|story|stories).(js|jsx|ts|tsx)',
    '!<rootDir>/src/assets',
    '!<rootDir>/src/utils/constants',
    '!<rootDir>/src/utils/tests',
  ],
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@App/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.client.setup.js'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],

  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};

module.exports = config;
