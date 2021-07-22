module.exports = {
  transform: {
    '\\.(js|ts)$': [
      'babel-jest',
      {
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread'
        ]
      }
    ]
  },
  // TODO: Fix coverage
  collectCoverage: false,
  collectCoverageFrom: [],
  coveragePathIgnorePatterns: ['node_modules', '.nuxt'],
  transformIgnorePatterns: [
    'node_modules/(?!@docus/app/|nuxt-i18n|mdast-util-to-hast|unist-builder|detab|unist-util-position/*)'
  ]
}
