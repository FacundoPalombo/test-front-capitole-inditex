/** @type {import('jest').Config} */
const config = {
  automock: false,
  silent: true,
  projects: [
    {
      displayName: {
        name: '[UI][Unit Tests]',
        color: 'cyan',
      },
      testMatch: ['**/(components|containers|view|hooks)/**/*.test.[jt]s'],
      testEnvironment: 'jsdom',
      setupFiles: ['<rootDir>/jest.env.setup.js'],
      setupFilesAfterEnv: ['<rootDir>/jest.client.setup.js'],
      moduleNameMapper: {
        '^@utils/(.*)$': '<rootDir>/utils/$1',
        '^@App/(.*)$': '<rootDir>/src/$1',
        '^@containers/(.*)$': '<rootDir>/src/containers/$1',
        '^@components/(.*)$': '<rootDir>/src/view/components/$1',

        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/fileMock.js',
      },
    },
    // {
    //   displayName: {
    //     name: '[UI][Integration Tests]',
    //     color: 'magenta',
    //   },
    //   testMatch: ['**/(components|containers|view|hooks)/**/*.spec.[jt]s'],
    //   testEnvironment: 'jsdom',
    //   setupFiles: ['<rootDir>/jest.env.setup.js'],
    //   setupFilesAfterEnv: ['<rootDir>/jest.client.setup.js'],
    //   moduleNameMapper: {
    //     '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',

    //     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //       '<rootDir>/__mocks__/fileMock.js',
    //   },
    // },
    {
      displayName: {
        name: '[Node][Integration Tests]',
        color: 'green',
      },
      testMatch: ['**/*.spec.[jt]s'],
      testEnvironment: 'node',
      setupFiles: ['<rootDir>/jest.env.setup.js'],
      setupFilesAfterEnv: ['<rootDir>/jest.server.setup.js'],
      testPathIgnorePatterns: [
        'components',
        'view',
        'container',
        'hooks',
        '^use[a-zA-Z0-9]+$',
      ],
      moduleNameMapper: {
        '^@utils/(.*)$': '<rootDir>/utils/$1',
        '^@App/(.*)$': '<rootDir>/src/$1',
        '^@containers/(.*)$': '<rootDir>/src/containers/$1',
        '^@components/(.*)$': '<rootDir>/src/view/components/$1',

        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/fileMock.js',
      },
    },
    {
      displayName: {
        name: '[Node][Unit Tests]',
        color: 'yellow',
      },
      testMatch: ['**/*.test.[jt]s'],
      testEnvironment: 'node',
      setupFiles: ['<rootDir>/jest.env.setup.js'],
      setupFilesAfterEnv: ['<rootDir>/jest.server.setup.js'],
      testPathIgnorePatterns: [
        'components',
        'view',
        'container',
        'hooks',
        '^use[a-zA-Z0-9]+$',
      ],
      moduleNameMapper: {
        '^@utils/(.*)$': '<rootDir>/utils/$1',
        '^@App/(.*)$': '<rootDir>/src/$1',
        '^@containers/(.*)$': '<rootDir>/src/containers/$1',
        '^@components/(.*)$': '<rootDir>/src/view/components/$1',

        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/fileMock.js',
      },
    },
  ],
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
    'coverage',
    'test',
    'tests',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(js|jsx)',
    '!**/**/*.(test|spec|config|fixture|mock|story|stories).(js|jsx)',
    '!<rootDir>/src/assets',
    '!<rootDir>/src/utils/constants',
    '!<rootDir>/src/utils/tests',
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
};

module.exports = config;
