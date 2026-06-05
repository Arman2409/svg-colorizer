# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.2] - 2026-06-05

### Fixed
- Fixed `stop-color` server-side parser stripping the first character of every value (off-by-one slice)

### Added
- ESLint with TypeScript support (`eslint`, `typescript-eslint`)
- 21 new tests covering: `ignoreColors`, callbacks, `stroke`/`stop-color` attributes, `asArray`/`onlyParent` options, RGB/alpha clamping, hue wrapping, and error cases
- `files` field in `package.json` for explicit publish whitelist
- Release scripts: `release:patch`, `release:minor`, `release:major`
- `CHANGELOG.md`

### Changed
- `callback` parameter type narrowed from `Function` to `() => void` across all functions

## [0.3.1] - 2025-04-29

### Fixed
- Fixed types exports paths in `package.json` (`exports.types` field)

### Changed
- Optimized `generateRandomColor`, `invertColors`, and related utility functions

## [0.3.0] - 2025-04-29

### Added
- Added `invertColors` function
- Added `changeAlpha` function with full test coverage
- Added `changeBrightness` function with full test coverage
- Added detection of stroke and stop colors inside `style` attributes for `getColors`

### Fixed
- Fixed `replace` function implementation (switched to DOM API)
- Fixed color replacing producing black when no match found

### Changed
- Restructured project: merged client/server fill and replace into unified functions
- Moved `/types` into `/lib`, renamed `utils` to `environments`
- Removed all `any` types

## [0.2.1] - 2025-04-29

### Changed
- Updated tsup config for improved build output

## [0.2.0] - 2024-05-29

### Added
- Added `generateRandomColor` function
- Added parameter type checking for all functions
- Added ESM/CJS dual build via tsup

### Changed
- Renamed `src` to `lib`

## [0.1.0] - 2024-05-01

### Added
- Initial release
- `fill` function (client and server)
- `replace` function (client and server)
- `getColors` function (client and server)
- Jest test suite with jsdom environment

[Unreleased]: https://github.com/Arman2409/svg-colorizer/compare/v0.3.2...HEAD
[0.3.2]: https://github.com/Arman2409/svg-colorizer/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/Arman2409/svg-colorizer/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/Arman2409/svg-colorizer/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/Arman2409/svg-colorizer/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Arman2409/svg-colorizer/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/Arman2409/svg-colorizer/releases/tag/v0.1.0
