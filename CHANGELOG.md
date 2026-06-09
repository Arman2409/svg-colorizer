# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.2] - 2026-06-09

### Added
- Live demo page (`index.html`) served via GitHub Pages
- Link to live demo in README

## [0.4.1] - 2026-06-09

### Fixed
- Server-side color replacement now replaces all occurrences of a color (was using `.replace` — first occurrence only — instead of `.replaceAll`)
- README server-side example had an invalid JS string due to unescaped double quotes inside the SVG literal

### Changed
- `tinycolor2` moved from `devDependencies` to `dependencies` — it is a runtime dependency and must be installed by consumers
- `exports` map corrected to the TypeScript-recommended dual CJS/ESM format with `types` nested inside each condition
- Added root-level `types` and `module` fields for older toolchain compatibility
- `main` corrected to point to the CJS build (`index.cjs`)
- Keywords expanded to improve npm discoverability

### Docs
- Fixed broken `#generateRandomColor` navigation anchor (was `#getRandomColor`)
- Added valid range information for the `factor` parameter in `changeBrightness`, `changeAlpha`, `changeHue`, and `changeSaturation`

## [0.4.0] - 2026-06-05

### Breaking Changes
- `callback` parameter type narrowed from `Function` to `() => void` in `fill`, `replace`, and `invert` — callbacks that accepted arguments or returned a value must be updated
- `stop-color` server-side extraction now returns the correct value — previously the first character was silently dropped (e.g. `"teal"` → `"eal"`)

### Fixed
- Fixed `stop-color` server-side parser stripping the first character of every value (off-by-one slice)

### Added
- ESLint with TypeScript support (`eslint`, `typescript-eslint`)
- 21 new tests covering: `ignoreColors`, callbacks, `stroke`/`stop-color` attributes, `asArray`/`onlyParent` options, RGB/alpha clamping, hue wrapping, and error cases
- `files` field in `package.json` for explicit publish whitelist
- Release scripts: `release:patch`, `release:minor`, `release:major`
- `CHANGELOG.md`

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

[Unreleased]: https://github.com/Arman2409/svg-colorizer/compare/v0.4.2...HEAD
[0.4.2]: https://github.com/Arman2409/svg-colorizer/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/Arman2409/svg-colorizer/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/Arman2409/svg-colorizer/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/Arman2409/svg-colorizer/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/Arman2409/svg-colorizer/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/Arman2409/svg-colorizer/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Arman2409/svg-colorizer/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/Arman2409/svg-colorizer/releases/tag/v0.1.0
