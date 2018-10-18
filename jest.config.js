module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/test/**/*.test.(ts|tsx|js)',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  clearMocks: true,
  preset: 'ts-jest',
}