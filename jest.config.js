export default {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
        "^.+\\.svg$": "jest-svg-transformer",
        ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    },
    moduleNameMapper: {
        "^.+\\.svg$": "/fileMock.ts",
    }
};