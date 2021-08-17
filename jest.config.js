/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/__mocks__/prismaMock.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/__tests__/__mocks__/',
  ],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
};
