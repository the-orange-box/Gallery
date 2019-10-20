// jest.config.js
module.exports = {
  "verbose": true,
  "setupFilesAfterEnv": ["<rootDir>/enzyme.config.js"],
    "transform": {
      "^.+\\.(js|jsx)$": "babel-jest",
      ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
    },
    // "globals": {
    //   "NODE_ENV": "test"
    // },
    // "moduleFileExtensions": [
    //   "js",
    //   "jsx"
    // ],
    "transformIgnorePatterns": ['<rootDir>/node_modules/']
    // "moduleDirectories": [
    //   "node_modules"
    // ]
};