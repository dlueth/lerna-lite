# Change Log
## Automate your Workspace Versioning, Publishing & Changelogs with [Lerna-Lite](https://github.com/lerna-lite/lerna-lite) 📦🚀

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.15.3-alpha.1](https://github.com/lerna-lite/lerna-lite/compare/v1.15.3-alpha.0...v1.15.3-alpha.1) (2023-03-01)

**Note:** Version bump only for package @qoopido/lerna.run

## 1.15.3-alpha.0 (2023-02-27)

### Bug Fixes

* bump min Node version to >=14.17.0 to align with external deps ([#387](https://github.com/lerna-lite/lerna-lite/issues/387)) ([2f804e9](https://github.com/lerna-lite/lerna-lite/commit/2f804e92bd319e2b27b1406ca82ec1fdab09c449)) - by @ghiscoding
* **cli:** load dotenv in CLI to fix env vars not found on Windows ([5f2ab87](https://github.com/lerna-lite/lerna-lite/commit/5f2ab87a90861db599bac4e852bdffb7f0619602)) - by @ghiscoding
* **cli:** yarn throw error w/line ending CRLF, must use LF in bin file ([e1a059a](https://github.com/lerna-lite/lerna-lite/commit/e1a059ad7b450ebc798b899e412bc0e6159ee9d1)) - by @ghiscoding
* **core:** better handling of possible missing pkg name ([ef9633d](https://github.com/lerna-lite/lerna-lite/commit/ef9633dfe623e1aca3e9350739317b9c57872b54)) - by @ghiscoding
* **deps:** update all non-major dependencies ([abe1eff](https://github.com/lerna-lite/lerna-lite/commit/abe1eff71fe211c36d05518a43f74da33967a450)) - by @renovate-bot
* **deps:** update all non-major dependencies ([c87e937](https://github.com/lerna-lite/lerna-lite/commit/c87e937da725a1d8fa1d685bc3957baf0bcedcee)) - by @renovate-bot
* **deps:** update all non-major dependencies ([#254](https://github.com/lerna-lite/lerna-lite/issues/254)) ([2d9a0d5](https://github.com/lerna-lite/lerna-lite/commit/2d9a0d563af74ad64cafad9225199668f6f6daf4)) - by @renovate-bot
* **deps:** update all non-major dependencies ([#402](https://github.com/lerna-lite/lerna-lite/issues/402)) ([3feeea9](https://github.com/lerna-lite/lerna-lite/commit/3feeea9559cafdf84f4b025950d7e4a862104284)) - by @renovate-bot
* **deps:** update all non-major dependencies ([#405](https://github.com/lerna-lite/lerna-lite/issues/405)) ([084da4f](https://github.com/lerna-lite/lerna-lite/commit/084da4f409b38f66bc1c5d4d2ef43f9a221ca80b)) - by @renovate-bot
* **deps:** update all non-major dependencies ([#488](https://github.com/lerna-lite/lerna-lite/issues/488)) ([126bdb7](https://github.com/lerna-lite/lerna-lite/commit/126bdb7713c7fe5444f755f9f719d07a483cf146)) - by @renovate[bot]
* **deps:** update dependency npmlog to v7 ([#389](https://github.com/lerna-lite/lerna-lite/issues/389)) ([d2110f1](https://github.com/lerna-lite/lerna-lite/commit/d2110f1aebe4b6cd44bcae2691fbd18fefc78299)) - by @renovate-bot
* **deps:** update few npm dependencies ([9175d48](https://github.com/lerna-lite/lerna-lite/commit/9175d48002ba7efb1b6b69506c3f6e864898b8a0)) - by @ghiscoding
* **init:** add missing packages/workspaces ([f78860d](https://github.com/lerna-lite/lerna-lite/commit/f78860d158dc4e3772ca8e33113f79508c4fda83)) - by @ghiscoding
* relax "engines.node" version ([ee59fbc](https://github.com/lerna-lite/lerna-lite/commit/ee59fbcfc7eefa02c85ecff2babd50b1bec112ce)) - by @azu
* **run:** add double quotes around script target containing colon ([18da175](https://github.com/lerna-lite/lerna-lite/commit/18da175f3b4525c51800affe78b57e151448c643)) - by @ghiscoding
* **run:** allow for loading of env files to be skipped ([#391](https://github.com/lerna-lite/lerna-lite/issues/391)) ([440611e](https://github.com/lerna-lite/lerna-lite/commit/440611ed3acceaef8a3cd4dcfa877591388d83a4)) - by @ghiscoding
* **run:** detect Nx target configuration in package.json files ([#416](https://github.com/lerna-lite/lerna-lite/issues/416)) ([be2af28](https://github.com/lerna-lite/lerna-lite/commit/be2af28c921e9bf52ce28141321b4bfe92c6935b)) - by @ghiscoding
* **run:** display pkg name only when not streaming, fixes [#149](https://github.com/lerna-lite/lerna-lite/issues/149) ([bf60bf0](https://github.com/lerna-lite/lerna-lite/commit/bf60bf09f6eaa206378fccf4ba4b3e551fc8eb3c)) - by @ghiscoding
* **run:** do not toposort when running in parallel with useNx to match legacy ([af1192c](https://github.com/lerna-lite/lerna-lite/commit/af1192cb11f1378a9b2c03a03b9361b8285bc52d)) - by @ghiscoding
* **run:** exclude dependencies with `--scope` when `nx.json` is not present ([3c222ed](https://github.com/lerna-lite/lerna-lite/commit/3c222eda560722b2540c8fd29906f4f04c44ca4e)) - by @ghiscoding
* **run:** fully defer to Nx for dep detection when nx.json exists ([0657aa4](https://github.com/lerna-lite/lerna-lite/commit/0657aa41c7502bedad346bed9a2bf91f4b3405d6)) - by @ghiscoding
* **run:** lerna run parallel should maximize concurrency with useNx ([14a113b](https://github.com/lerna-lite/lerna-lite/commit/14a113bf25aec6a5d79626787f34bbea5a671a3a)), closes [#3205](https://github.com/lerna-lite/lerna-lite/issues/3205) - by @ghiscoding
* **run:** Nx correctly detect if target dependencies default are set ([4720351](https://github.com/lerna-lite/lerna-lite/commit/47203516ce87830bce8ce6275f5414190c842480)) - by @ghiscoding
* **run:** only defer to Nx when targetDefaults are defined in nx.json ([127f90c](https://github.com/lerna-lite/lerna-lite/commit/127f90ce512a9ba0142821f5f1819857b8eb1123)) - by @ghiscoding
* **run:** use optional chaining because of possible null result object ([cca5309](https://github.com/lerna-lite/lerna-lite/commit/cca53090ac88c0753d834b0026674a82983be6c6)) - by @ghiscoding
* **run:** warn on incompatible arguments with useNx ([bc5e823](https://github.com/lerna-lite/lerna-lite/commit/bc5e82368533d435765250927ecebfa01caeaf62)) - by @ghiscoding

### Features

* **cli:** add `ws-roller` CLI for publish & version commands ([6201c1d](https://github.com/lerna-lite/lerna-lite/commit/6201c1dc6d016b1c61b4f17855a16ca6562d013a)) - by @ghiscoding
* **cmd:** breaking, rename dry-run option to `cmd-dry-run` ([01e4777](https://github.com/lerna-lite/lerna-lite/commit/01e47776454bed89db320c17fae0c5c408af4940)) - by @ghiscoding
* **commands:** rename `git-dry-run` and `cmd-dry-run` to simply `dry-run` ([#377](https://github.com/lerna-lite/lerna-lite/issues/377)) ([3a55f5e](https://github.com/lerna-lite/lerna-lite/commit/3a55f5e8f7c26f3890f1c7099ca85c9d72cd2674)) - by @ghiscoding
* **core:** add version/publish `workspace:` protocol ([ee57dfb](https://github.com/lerna-lite/lerna-lite/commit/ee57dfbb3ad26cd4bd722e1b54941360ec22f698)) - by @ghiscoding
* **exec:** add Lerna `exec` command ([8e87ea1](https://github.com/lerna-lite/lerna-lite/commit/8e87ea1f3a9987e2700b07886e4f600af090f344)) - by @ghiscoding
* filter for lerna tags in independent mode ([#267](https://github.com/lerna-lite/lerna-lite/issues/267)) ([8c3cdb3](https://github.com/lerna-lite/lerna-lite/commit/8c3cdb38528baf7a4075c846bc33c8933a1a5c0b)) - by @ghiscoding
* **info:** add `info` command to CLI ([6fa1154](https://github.com/lerna-lite/lerna-lite/commit/6fa1154a9412c78f26585f41d5612ad083d4494a)) - by @ghiscoding
* **run:** add `--use-nx` as CLI option and add Nx profiler ([9da003e](https://github.com/lerna-lite/lerna-lite/commit/9da003e6b570f969c5da437c71f3a8f9753e4704)) - by @ghiscoding
* **run:** add `LERNA_PACKAGE_NAME` env var to `run` command ([ae88a0a](https://github.com/lerna-lite/lerna-lite/commit/ae88a0a9169ebc9937455062d4e856a1e612dce0)), closes [#3107](https://github.com/lerna-lite/lerna-lite/issues/3107) - by @ghiscoding
* **run:** add `run` command to help run workspace script in parallel ([a71191b](https://github.com/lerna-lite/lerna-lite/commit/a71191b71b3af6ac64e9200c1ac1362efaa28b48)) - by @ghiscoding
* **run:** add experimental support to `run` tasks via Nx ([743d434](https://github.com/lerna-lite/lerna-lite/commit/743d4347e37198ddd6c0915f99daaf852cf800de)), closes [#3139](https://github.com/lerna-lite/lerna-lite/issues/3139) - by @ghiscoding
* **run:** Improve output with `--no-bail` ([3d86e53](https://github.com/lerna-lite/lerna-lite/commit/3d86e53fd6c7b30b39d36d89c5d7096f44f11c9d)), closes [#2974](https://github.com/lerna-lite/lerna-lite/issues/2974) - by @ghiscoding
* **watch:** add optional stdin key to exit watch mode cleanly ([#472](https://github.com/lerna-lite/lerna-lite/issues/472)) ([d0cf2d9](https://github.com/lerna-lite/lerna-lite/commit/d0cf2d9d8286f8016867cfd79e3b1146b96b747d)) - by @ghiscoding

## [1.15.1](https://github.com/lerna-lite/lerna-lite/compare/v1.15.0...v1.15.1) (2023-02-08)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.15.0](https://github.com/lerna-lite/lerna-lite/compare/v1.14.2...v1.15.0) (2023-02-04)

### Features

* **watch:** add optional stdin key to exit watch mode cleanly ([#472](https://github.com/lerna-lite/lerna-lite/issues/472)) ([d0cf2d9](https://github.com/lerna-lite/lerna-lite/commit/d0cf2d9d8286f8016867cfd79e3b1146b96b747d)) - by @ghiscoding

## [1.14.2](https://github.com/lerna-lite/lerna-lite/compare/v1.14.1...v1.14.2) (2023-01-21)

**Note:** Version bump only for package @qoopido/lerna.run

## [1.14.1](https://github.com/lerna-lite/lerna-lite/compare/v1.14.0...v1.14.1) (2023-01-19)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.14.0](https://github.com/lerna-lite/lerna-lite/compare/v1.13.0...v1.14.0) (2023-01-18)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.13.0](https://github.com/lerna-lite/lerna-lite/compare/v1.12.0...v1.13.0) (2022-11-22)

### Bug Fixes

* **deps:** update all non-major dependencies ([#402](https://github.com/lerna-lite/lerna-lite/issues/402)) ([3feeea9](https://github.com/lerna-lite/lerna-lite/commit/3feeea9559cafdf84f4b025950d7e4a862104284)) - by @renovate-bot
* **deps:** update all non-major dependencies ([#405](https://github.com/lerna-lite/lerna-lite/issues/405)) ([084da4f](https://github.com/lerna-lite/lerna-lite/commit/084da4f409b38f66bc1c5d4d2ef43f9a221ca80b)) - by @renovate-bot
* **run:** detect Nx target configuration in package.json files ([#416](https://github.com/lerna-lite/lerna-lite/issues/416)) ([be2af28](https://github.com/lerna-lite/lerna-lite/commit/be2af28c921e9bf52ce28141321b4bfe92c6935b)) - by @ghiscoding

# [1.12.0](https://github.com/lerna-lite/lerna-lite/compare/v1.11.3...v1.12.0) (2022-10-14)

### Bug Fixes

* bump min Node version to >=14.17.0 to align with external deps ([#387](https://github.com/lerna-lite/lerna-lite/issues/387)) ([2f804e9](https://github.com/lerna-lite/lerna-lite/commit/2f804e92bd319e2b27b1406ca82ec1fdab09c449)) - by @ghiscoding
* **deps:** update dependency npmlog to v7 ([#389](https://github.com/lerna-lite/lerna-lite/issues/389)) ([d2110f1](https://github.com/lerna-lite/lerna-lite/commit/d2110f1aebe4b6cd44bcae2691fbd18fefc78299)) - by @renovate-bot
* **run:** allow for loading of env files to be skipped ([#391](https://github.com/lerna-lite/lerna-lite/issues/391)) ([440611e](https://github.com/lerna-lite/lerna-lite/commit/440611ed3acceaef8a3cd4dcfa877591388d83a4)) - by @ghiscoding
* **run:** fully defer to Nx for dep detection when nx.json exists ([0657aa4](https://github.com/lerna-lite/lerna-lite/commit/0657aa41c7502bedad346bed9a2bf91f4b3405d6)) - by @ghiscoding
* **run:** only defer to Nx when targetDefaults are defined in nx.json ([127f90c](https://github.com/lerna-lite/lerna-lite/commit/127f90ce512a9ba0142821f5f1819857b8eb1123)) - by @ghiscoding
* **run:** warn on incompatible arguments with useNx ([bc5e823](https://github.com/lerna-lite/lerna-lite/commit/bc5e82368533d435765250927ecebfa01caeaf62)) - by @ghiscoding

### Features

* **commands:** rename `git-dry-run` and `cmd-dry-run` to simply `dry-run` ([#377](https://github.com/lerna-lite/lerna-lite/issues/377)) ([3a55f5e](https://github.com/lerna-lite/lerna-lite/commit/3a55f5e8f7c26f3890f1c7099ca85c9d72cd2674)) - by @ghiscoding
* **run:** add `--use-nx` as CLI option and add Nx profiler ([9da003e](https://github.com/lerna-lite/lerna-lite/commit/9da003e6b570f969c5da437c71f3a8f9753e4704)) - by @ghiscoding

## [1.11.3](https://github.com/lerna-lite/lerna-lite/compare/v1.11.2...v1.11.3) (2022-09-20)

### Bug Fixes

* **run:** exclude dependencies with `--scope` when `nx.json` is not present ([3c222ed](https://github.com/lerna-lite/lerna-lite/commit/3c222eda560722b2540c8fd29906f4f04c44ca4e)) - by @ghiscoding

## [1.11.2](https://github.com/lerna-lite/lerna-lite/compare/v1.11.1...v1.11.2) (2022-08-30)

**Note:** Version bump only for package @qoopido/lerna.run

## [1.11.1](https://github.com/lerna-lite/lerna-lite/compare/v1.11.0...v1.11.1) (2022-08-24)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.11.0](https://github.com/lerna-lite/lerna-lite/compare/v1.10.0...v1.11.0) (2022-08-19)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.10.0](https://github.com/lerna-lite/lerna-lite/compare/v1.9.1...v1.10.0) (2022-08-06)

### Bug Fixes

* **deps:** update all non-major dependencies ([abe1eff](https://github.com/lerna-lite/lerna-lite/commit/abe1eff71fe211c36d05518a43f74da33967a450)) - by @renovate-bot
* **run:** do not toposort when running in parallel with useNx to match legacy ([af1192c](https://github.com/lerna-lite/lerna-lite/commit/af1192cb11f1378a9b2c03a03b9361b8285bc52d)) - by @ghiscoding

## [1.9.1](https://github.com/lerna-lite/lerna-lite/compare/v1.9.0...v1.9.1) (2022-08-01)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.9.0](https://github.com/lerna-lite/lerna-lite/compare/v1.8.0...v1.9.0) (2022-07-28)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.8.0](https://github.com/lerna-lite/lerna-lite/compare/v1.6.0...v1.8.0) (2022-07-21)

### Bug Fixes

* **deps:** update all non-major dependencies ([#254](https://github.com/lerna-lite/lerna-lite/issues/254)) ([2d9a0d5](https://github.com/lerna-lite/lerna-lite/commit/2d9a0d563af74ad64cafad9225199668f6f6daf4)) (by _WhiteSource Renovate_)
* **run:** add double quotes around script target containing colon ([18da175](https://github.com/lerna-lite/lerna-lite/commit/18da175f3b4525c51800affe78b57e151448c643)) (by _ghiscoding_)

### Features

* filter for lerna tags in independent mode ([#267](https://github.com/lerna-lite/lerna-lite/issues/267)) ([8c3cdb3](https://github.com/lerna-lite/lerna-lite/commit/8c3cdb38528baf7a4075c846bc33c8933a1a5c0b)) (by _Ghislain B_)

# [1.6.0](https://github.com/lerna-lite/lerna-lite/compare/v1.5.1...v1.6.0) (2022-06-30)

### Bug Fixes

* **run:** lerna run parallel should maximize concurrency with useNx ([14a113b](https://github.com/lerna-lite/lerna-lite/commit/14a113bf25aec6a5d79626787f34bbea5a671a3a)), closes [#3205](https://github.com/lerna-lite/lerna-lite/issues/3205)
* **run:** Nx correctly detect if target dependencies default are set ([4720351](https://github.com/lerna-lite/lerna-lite/commit/47203516ce87830bce8ce6275f5414190c842480))

## [1.5.1](https://github.com/lerna-lite/lerna-lite/compare/v1.5.0...v1.5.1) (2022-06-12)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.5.0](https://github.com/lerna-lite/lerna-lite/compare/v1.4.0...v1.5.0) (2022-06-08)

### Bug Fixes

* **deps:** update all non-major dependencies ([c87e937](https://github.com/lerna-lite/lerna-lite/commit/c87e937da725a1d8fa1d685bc3957baf0bcedcee))

# [1.4.0](https://github.com/lerna-lite/lerna-lite/compare/v1.3.0...v1.4.0) (2022-05-30)

### Bug Fixes

* **init:** add missing packages/workspaces ([f78860d](https://github.com/lerna-lite/lerna-lite/commit/f78860d158dc4e3772ca8e33113f79508c4fda83))

### Features

* **run:** add experimental support to `run` tasks via Nx ([743d434](https://github.com/lerna-lite/lerna-lite/commit/743d4347e37198ddd6c0915f99daaf852cf800de)), closes [#3139](https://github.com/lerna-lite/lerna-lite/issues/3139)

# [1.3.0](https://github.com/lerna-lite/lerna-lite/compare/v1.2.0...v1.3.0) (2022-05-13)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.2.0](https://github.com/lerna-lite/lerna-lite/compare/v1.1.1...v1.2.0) (2022-05-11)

### Bug Fixes

* **run:** display pkg name only when not streaming, fixes [#149](https://github.com/lerna-lite/lerna-lite/issues/149) ([bf60bf0](https://github.com/lerna-lite/lerna-lite/commit/bf60bf09f6eaa206378fccf4ba4b3e551fc8eb3c))

### Features

* **core:** add version/publish `workspace:` protocol ([ee57dfb](https://github.com/lerna-lite/lerna-lite/commit/ee57dfbb3ad26cd4bd722e1b54941360ec22f698))
* **run:** add `LERNA_PACKAGE_NAME` env var to `run` command ([ae88a0a](https://github.com/lerna-lite/lerna-lite/commit/ae88a0a9169ebc9937455062d4e856a1e612dce0)), closes [#3107](https://github.com/lerna-lite/lerna-lite/issues/3107)

## [1.1.1](https://github.com/lerna-lite/lerna-lite/compare/v1.1.0...v1.1.1) (2022-05-01)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.1.0](https://github.com/lerna-lite/lerna-lite/compare/v1.0.5...v1.1.0) (2022-05-01)

### Features

* **cmd:** breaking, rename dry-run option to `cmd-dry-run` ([01e4777](https://github.com/lerna-lite/lerna-lite/commit/01e47776454bed89db320c17fae0c5c408af4940))

* **exec:** add Lerna `exec` command ([8e87ea1](https://github.com/lerna-lite/lerna-lite/commit/8e87ea1f3a9987e2700b07886e4f600af090f344))

* **info:** add `info` command to CLI ([6fa1154](https://github.com/lerna-lite/lerna-lite/commit/6fa1154a9412c78f26585f41d5612ad083d4494a))

## [1.0.5](https://github.com/lerna-lite/lerna-lite/compare/v1.0.4...v1.0.5) (2022-03-29)

### Bug Fixes

* relax "engines.node" version ([ee59fbc](https://github.com/lerna-lite/lerna-lite/commit/ee59fbcfc7eefa02c85ecff2babd50b1bec112ce))

## [1.0.4](https://github.com/lerna-lite/lerna-lite/compare/v1.0.3...v1.0.4) (2022-03-24)

**Note:** Version bump only for package @qoopido/lerna.run

## [1.0.3](https://github.com/lerna-lite/lerna-lite/compare/v1.0.2...v1.0.3) (2022-03-19)

**Note:** Version bump only for package @qoopido/lerna.run

## [1.0.2](https://github.com/lerna-lite/lerna-lite/compare/v1.0.1...v1.0.2) (2022-03-17)

**Note:** Version bump only for package @qoopido/lerna.run

## [1.0.1](https://github.com/lerna-lite/lerna-lite/compare/v1.0.0...v1.0.1) (2022-03-15)

**Note:** Version bump only for package @qoopido/lerna.run

# [1.0.0](https://github.com/lerna-lite/lerna-lite/compare/v0.3.7...v1.0.0) (2022-03-15)

**Note:** Version bump only for package @qoopido/lerna.run

## [0.3.7](https://github.com/lerna-lite/lerna-lite/compare/v0.3.5...v0.3.7) (2022-03-09)

### Bug Fixes

* **core:** better handling of possible missing pkg name ([ef9633d](https://github.com/lerna-lite/lerna-lite/commit/ef9633dfe623e1aca3e9350739317b9c57872b54))

## [0.3.6](https://github.com/lerna-lite/lerna-lite/compare/v0.3.4...v0.3.6) (2022-03-05)

### Bug Fixes

* **deps:** update few npm dependencies ([9175d48](https://github.com/lerna-lite/lerna-lite/commit/9175d48002ba7efb1b6b69506c3f6e864898b8a0))

## [0.3.5](https://github.com/lerna-lite/lerna-lite/compare/v0.3.4...v0.3.5) (2022-03-05)

### Bug Fixes

* **deps:** update few npm dependencies ([9175d48](https://github.com/lerna-lite/lerna-lite/commit/9175d48002ba7efb1b6b69506c3f6e864898b8a0))

## [0.3.4](https://github.com/lerna-lite/lerna-lite/compare/v0.3.3...v0.3.4) (2022-03-05)

**Note:** Version bump only for package @qoopido/lerna.run

## [0.3.3](https://github.com/lerna-lite/lerna-lite/compare/v0.3.2...v0.3.3) (2022-02-27)

**Note:** Version bump only for package @qoopido/lerna.run

## [0.3.2](https://github.com/lerna-lite/lerna-lite/compare/v0.3.1...v0.3.2) (2022-02-22)

**Note:** Version bump only for package @qoopido/lerna.run

## [0.3.1](https://github.com/lerna-lite/lerna-lite/compare/v0.3.0...v0.3.1) (2022-02-12)

**Note:** Version bump only for package @qoopido/lerna.run

# [0.3.0](https://github.com/lerna-lite/lerna-lite/compare/v0.2.3...v0.3.0) (2022-02-12)

## BREAKING CHANGE

Rename the lib to Lerna-Lite

## [0.2.3](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.2.2...v0.2.3) (2022-02-11)

### Bug Fixes

* **run:** use optional chaining because of possible null result object ([cca5309](https://github.com/ghiscoding/ws-conventional-version-roller/commit/cca53090ac88c0753d834b0026674a82983be6c6))

## [0.2.2](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.2.1...v0.2.2) (2022-02-11)

### Bug Fixes

* **cli:** load dotenv in CLI to fix env vars not found on Windows ([5f2ab87](https://github.com/ghiscoding/ws-conventional-version-roller/commit/5f2ab87a90861db599bac4e852bdffb7f0619602))

## [0.2.1](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.2.0...v0.2.1) (2022-02-11)

### Bug Fixes

* **cli:** yarn throw error w/line ending CRLF, must use LF in bin file ([e1a059a](https://github.com/ghiscoding/ws-conventional-version-roller/commit/e1a059ad7b450ebc798b899e412bc0e6159ee9d1))

# [0.2.0](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.1.8...v0.2.0) (2022-02-11)

### Features

* **cli:** add `ws-roller` CLI for publish & version commands ([6201c1d](https://github.com/ghiscoding/ws-conventional-version-roller/commit/6201c1dc6d016b1c61b4f17855a16ca6562d013a))

* **run:** add `run` command to help run workspace script in parallel ([a71191b](https://github.com/ghiscoding/ws-conventional-version-roller/commit/a71191b71b3af6ac64e9200c1ac1362efaa28b48))

* **run:** Improve output with `--no-bail` ([3d86e53](https://github.com/ghiscoding/ws-conventional-version-roller/commit/3d86e53fd6c7b30b39d36d89c5d7096f44f11c9d)), closes [#2974](https://github.com/ghiscoding/ws-conventional-version-roller/issues/2974)
