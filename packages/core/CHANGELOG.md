# Change Log
## Automate your Workspace Versioning, Publishing & Changelogs with [Lerna-Lite](https://github.com/lerna-lite/lerna-lite) 📦🚀

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.15.1](https://github.com/lerna-lite/lerna-lite/compare/v1.15.0...v1.15.1) (2023-02-08)

### Bug Fixes

* **deps:** update dependency minimatch to v6 ([#481](https://github.com/lerna-lite/lerna-lite/issues/481)) ([b97ecee](https://github.com/lerna-lite/lerna-lite/commit/b97ecee5ed59663680a41579d341b03c467c6c55)) - by @renovate[bot]

# [1.15.0](https://github.com/lerna-lite/lerna-lite/compare/v1.14.2...v1.15.0) (2023-02-04)

### Bug Fixes

* **publish:** deprecate publish --require-scripts ([#463](https://github.com/lerna-lite/lerna-lite/issues/463)) ([e8ef54e](https://github.com/lerna-lite/lerna-lite/commit/e8ef54ed18581e092cdd9da89d547635f7792249)) - by @ghiscoding
* **watch:** use a better debounce option name for the watch ([#476](https://github.com/lerna-lite/lerna-lite/issues/476)) ([eb0bbc1](https://github.com/lerna-lite/lerna-lite/commit/eb0bbc136133e47881a5ef38ad5e3feb45675e56)) - by @ghiscoding

### Features

* **publish:** add `--cleanup-temp-files` option to cleanup packed tmp ([#474](https://github.com/lerna-lite/lerna-lite/issues/474)) ([6781c79](https://github.com/lerna-lite/lerna-lite/commit/6781c7938a3594b5cd0f6da28f02e3c230d4e045)) - by @ghiscoding
* **version:** move all version related methods under version package ([#456](https://github.com/lerna-lite/lerna-lite/issues/456)) ([2c0921a](https://github.com/lerna-lite/lerna-lite/commit/2c0921aecb52330f853d08b453f3cd1a61a0857e)) - by @ghiscoding
* **watch:** add optional stdin key to exit watch mode cleanly ([#472](https://github.com/lerna-lite/lerna-lite/issues/472)) ([d0cf2d9](https://github.com/lerna-lite/lerna-lite/commit/d0cf2d9d8286f8016867cfd79e3b1146b96b747d)) - by @ghiscoding

## [1.14.2](https://github.com/lerna-lite/lerna-lite/compare/v1.14.1...v1.14.2) (2023-01-21)

### Bug Fixes

* **watch:** add missing --stream option ([#448](https://github.com/lerna-lite/lerna-lite/issues/448)) ([b249c7c](https://github.com/lerna-lite/lerna-lite/commit/b249c7c8570f3e08c43e2387f6ccc1d21bed5d7f)) - by @ghiscoding
* **watch:** add missing Chokidar option awaitWriteFinish as a boolean ([#449](https://github.com/lerna-lite/lerna-lite/issues/449)) ([6ed56dc](https://github.com/lerna-lite/lerna-lite/commit/6ed56dcac65a03ea2730142806541c679633edd8)) - by @ghiscoding
* **watch:** lerna watch should ignore git, dist & node_modules folders ([#452](https://github.com/lerna-lite/lerna-lite/issues/452)) ([fa34c58](https://github.com/lerna-lite/lerna-lite/commit/fa34c58ecbc342c547f5f6d50d416c10aa1adcf6)) - by @ghiscoding
* **watch:** queue watch callbacks to avoid breaking previous run ([#453](https://github.com/lerna-lite/lerna-lite/issues/453)) ([bd892ac](https://github.com/lerna-lite/lerna-lite/commit/bd892acffdbef89247f50eab5a297c8ac89f24ad)) - by @ghiscoding

## [1.14.1](https://github.com/lerna-lite/lerna-lite/compare/v1.14.0...v1.14.1) (2023-01-19)

**Note:** Version bump only for package @qoopido/lerna.core

# [1.14.0](https://github.com/lerna-lite/lerna-lite/compare/v1.13.0...v1.14.0) (2023-01-18)

### Bug Fixes

* **core:** more detailed error message when version cannot be found ([#431](https://github.com/lerna-lite/lerna-lite/issues/431)) ([7f3dffb](https://github.com/lerna-lite/lerna-lite/commit/7f3dffb23d75630226a5a4474651200eec6f136d)) - by @ghiscoding
* **deps:** update all non-major dependencies ([#423](https://github.com/lerna-lite/lerna-lite/issues/423)) ([b965cc7](https://github.com/lerna-lite/lerna-lite/commit/b965cc79eca285a39ac420fd1c1e3e7614c9c6e0)) - by @renovate-bot
* **deps:** update all non-major dependencies ([#425](https://github.com/lerna-lite/lerna-lite/issues/425)) ([3793929](https://github.com/lerna-lite/lerna-lite/commit/3793929488365180a7da3e03686bf42eb2172482)) - by @renovate-bot

### Features

* **publish:** add --summary-file option ([#428](https://github.com/lerna-lite/lerna-lite/issues/428)) ([3de55ef](https://github.com/lerna-lite/lerna-lite/commit/3de55ef1ad7127b4e86f4c2f5accfa009c10d79b)) - by @ghiscoding
* **version:** support custom command for git tag ([#430](https://github.com/lerna-lite/lerna-lite/issues/430)) ([246ac57](https://github.com/lerna-lite/lerna-lite/commit/246ac57953239771a22901a32bd5be77447b8b43)) - by @ghiscoding
* **watch:** Add `lerna watch` command ([#441](https://github.com/lerna-lite/lerna-lite/issues/441)) ([a244128](https://github.com/lerna-lite/lerna-lite/commit/a24412848129fcfebd593e3c323d69f8f3172112)) - by @ghiscoding

# [1.13.0](https://github.com/lerna-lite/lerna-lite/compare/v1.12.0...v1.13.0) (2022-11-22)

### Bug Fixes

* **deps:** npm-package-arg now normalize x, x@, x@* ([#400](https://github.com/lerna-lite/lerna-lite/issues/400)) ([41b6eaa](https://github.com/lerna-lite/lerna-lite/commit/41b6eaa7077801084c8cb6308aba4cf2285f7063)) - by @ghiscoding
* **deps:** update all non-major dependencies ([#402](https://github.com/lerna-lite/lerna-lite/issues/402)) ([3feeea9](https://github.com/lerna-lite/lerna-lite/commit/3feeea9559cafdf84f4b025950d7e4a862104284)) - by @renovate-bot
* **deps:** update all non-major dependencies ([#405](https://github.com/lerna-lite/lerna-lite/issues/405)) ([084da4f](https://github.com/lerna-lite/lerna-lite/commit/084da4f409b38f66bc1c5d4d2ef43f9a221ca80b)) - by @renovate-bot
* **deps:** update all non-major dependencies ([#414](https://github.com/lerna-lite/lerna-lite/issues/414)) ([267fced](https://github.com/lerna-lite/lerna-lite/commit/267fced53045193e6a3a7b53fcfc58b6a961bcdc)) - by @renovate-bot
* **deps:** update dependency @npmcli/run-script to v6 ([#406](https://github.com/lerna-lite/lerna-lite/issues/406)) ([02c998e](https://github.com/lerna-lite/lerna-lite/commit/02c998e6ac3187c3f20807431f6c1ffe3bc7e5ea)) - by @renovate-bot
* **deps:** update dependency cosmiconfig to v8 ([#419](https://github.com/lerna-lite/lerna-lite/issues/419)) ([b31dfe7](https://github.com/lerna-lite/lerna-lite/commit/b31dfe7471d7a6e6572336414bc0c9a47458acc6)) - by @renovate-bot

### Features

* **publish:** apply publishConfig overrides, closes [#404](https://github.com/lerna-lite/lerna-lite/issues/404) ([#415](https://github.com/lerna-lite/lerna-lite/issues/415)) ([03e8157](https://github.com/lerna-lite/lerna-lite/commit/03e81571b8e68bc54fa69afbbc00f6338b39b19f)) - by @ghiscoding
* **version:** bump prerelease versions from conventional commits ([#409](https://github.com/lerna-lite/lerna-lite/issues/409)) ([dad936e](https://github.com/lerna-lite/lerna-lite/commit/dad936e9cc42252028175f08de73c8554d3f7cf1)) - by @ghiscoding
* **version:** use npmClientArgs in npm install after lerna version ([#417](https://github.com/lerna-lite/lerna-lite/issues/417)) ([43e5dcd](https://github.com/lerna-lite/lerna-lite/commit/43e5dcde6bfce0edc062fce4dc3431771423d77c)) - by @ghiscoding

# [1.12.0](https://github.com/lerna-lite/lerna-lite/compare/v1.11.3...v1.12.0) (2022-10-14)

### Bug Fixes

* bump min Node version to >=14.17.0 to align with external deps ([#387](https://github.com/lerna-lite/lerna-lite/issues/387)) ([2f804e9](https://github.com/lerna-lite/lerna-lite/commit/2f804e92bd319e2b27b1406ca82ec1fdab09c449)) - by @ghiscoding
* **deps:** update dependency @npmcli/run-script to v5 ([#388](https://github.com/lerna-lite/lerna-lite/issues/388)) ([f8a8995](https://github.com/lerna-lite/lerna-lite/commit/f8a8995a4a23f5b4e0aa21de79f6be490acd46a1)) - by @renovate-bot
* **deps:** update dependency @octokit/rest to ^19.0.5 ([#380](https://github.com/lerna-lite/lerna-lite/issues/380)) ([18155d8](https://github.com/lerna-lite/lerna-lite/commit/18155d89b078aebcea2ef55704910bea56e8514a)) - by @renovate-bot
* **deps:** update dependency npm-packlist to v6 ([4241c2f](https://github.com/lerna-lite/lerna-lite/commit/4241c2f8b530538fc2ea1dec3dbfebb438056470)) - by @renovate-bot
* **deps:** update dependency npmlog to v7 ([#389](https://github.com/lerna-lite/lerna-lite/issues/389)) ([d2110f1](https://github.com/lerna-lite/lerna-lite/commit/d2110f1aebe4b6cd44bcae2691fbd18fefc78299)) - by @renovate-bot
* **deps:** update dependency write-file-atomic to v5 ([#386](https://github.com/lerna-lite/lerna-lite/issues/386)) ([ffdea0d](https://github.com/lerna-lite/lerna-lite/commit/ffdea0d16e03c0f63e5de4cd61ac53d5eda907e9)) - by @renovate-bot
* **deps:** upgrading pacote & npm-packlist to v7 requires arborist tree ([#367](https://github.com/lerna-lite/lerna-lite/issues/367)) ([8c34a3b](https://github.com/lerna-lite/lerna-lite/commit/8c34a3bccf582f90543b80253d065b22bddd8e35)) - by @ghiscoding
* **run:** allow for loading of env files to be skipped ([#391](https://github.com/lerna-lite/lerna-lite/issues/391)) ([440611e](https://github.com/lerna-lite/lerna-lite/commit/440611ed3acceaef8a3cd4dcfa877591388d83a4)) - by @ghiscoding

### Features

* **commands:** rename `git-dry-run` and `cmd-dry-run` to simply `dry-run` ([#377](https://github.com/lerna-lite/lerna-lite/issues/377)) ([3a55f5e](https://github.com/lerna-lite/lerna-lite/commit/3a55f5e8f7c26f3890f1c7099ca85c9d72cd2674)) - by @ghiscoding
* **publish:** add new option `--remove-package-fields` before publish ([#359](https://github.com/lerna-lite/lerna-lite/issues/359)) ([45a2107](https://github.com/lerna-lite/lerna-lite/commit/45a2107aa8862546a261a0c377c3fc704248bc5a)) - by @ghiscoding
* **run:** add `--use-nx` as CLI option and add Nx profiler ([9da003e](https://github.com/lerna-lite/lerna-lite/commit/9da003e6b570f969c5da437c71f3a8f9753e4704)) - by @ghiscoding
* **version:** add `--allow-peer-dependencies-update`, closes [#333](https://github.com/lerna-lite/lerna-lite/issues/333) ([#363](https://github.com/lerna-lite/lerna-lite/issues/363)) ([efaf011](https://github.com/lerna-lite/lerna-lite/commit/efaf0111e2e687718d33b42418abd701447a7031)) - by @ghiscoding
* **version:** use manual GitHub web interface when `GH_TOKEN` undefined ([83e9cce](https://github.com/lerna-lite/lerna-lite/commit/83e9cce5e45a12ccf7028d453a9fcddf965443a1)) - by @ghiscoding

## [1.11.3](https://github.com/lerna-lite/lerna-lite/compare/v1.11.2...v1.11.3) (2022-09-20)

### Bug Fixes

* **deps:** update dependency git-url-parse to ^13.1.0 ([bcce5ae](https://github.com/lerna-lite/lerna-lite/commit/bcce5ae8fc5b6f04a46d41d4c1c1210398bfb933)) - by @renovate-bot
* **deps:** update dependency git-url-parse to v13 ([3bf8155](https://github.com/lerna-lite/lerna-lite/commit/3bf815527390531be221e14f10a4f61d33aa1bde)) - by @renovate-bot
* **deps:** update dependency uuid to v9 ([e97efb6](https://github.com/lerna-lite/lerna-lite/commit/e97efb605dc7d94bbd1ecfa6a3c07e371e5013c4)) - by @renovate-bot
* **run:** exclude dependencies with `--scope` when `nx.json` is not present ([3c222ed](https://github.com/lerna-lite/lerna-lite/commit/3c222eda560722b2540c8fd29906f4f04c44ca4e)) - by @ghiscoding

## [1.11.2](https://github.com/lerna-lite/lerna-lite/compare/v1.11.1...v1.11.2) (2022-08-30)

### Bug Fixes

* **version:** --changelog-include-commits-[x] in cli should be truthy ([1ddde05](https://github.com/lerna-lite/lerna-lite/commit/1ddde050ccfb285725efb84869adfba733a4dc0c)) - by @ghiscoding
* **version:** `--changelog-header-message` should be added to all logs ([c27a97d](https://github.com/lerna-lite/lerna-lite/commit/c27a97d77d58e09ba746848f93e4a66237231473)) - by @ghiscoding

## [1.11.1](https://github.com/lerna-lite/lerna-lite/compare/v1.11.0...v1.11.1) (2022-08-24)

### Bug Fixes

* **core:** fix parsing commit date with different time zone ([2dc37ec](https://github.com/lerna-lite/lerna-lite/commit/2dc37ec5974c6d82967cd4e11b26ab0f90857185)) - by @ahrbil

# [1.11.0](https://github.com/lerna-lite/lerna-lite/compare/v1.10.0...v1.11.0) (2022-08-19)

### Bug Fixes

* **core:** use match pattern to get last tag date with independent mode ([cebcecf](https://github.com/lerna-lite/lerna-lite/commit/cebcecf95afe30db35995749a9b2a558be176314)) - by @ghiscoding
* **deps:** update all non-major dependencies ([e3b379c](https://github.com/lerna-lite/lerna-lite/commit/e3b379cc1b2bc9632801950e24ebf964780c8aaf)) - by @renovate-bot
* **deps:** update all non-major dependencies ([e8dcfec](https://github.com/lerna-lite/lerna-lite/commit/e8dcfece2a45eb6648c3b76f4938d521078673e8)) - by @renovate-bot
* **version:** changelog client login not need  linkRefs in template ([57047ab](https://github.com/lerna-lite/lerna-lite/commit/57047abe188325cb70bbfa0a8b3edee6b303ef7d)) - by @ghiscoding
* **version:** commit user login, oldest commit might be undefined ([4132f43](https://github.com/lerna-lite/lerna-lite/commit/4132f436d9ed8a0d826920749f3b76a1f3e0c7cc)) - by @ghiscoding
* **version:** use `%aI` to pull oldest commit author date ([e033e05](https://github.com/lerna-lite/lerna-lite/commit/e033e05982be3a590ede21cdbc9f839c4d871ab3)) - by @ghiscoding

### Features

* **cli:** add JSON schema for `lerna.json` ([fd93826](https://github.com/lerna-lite/lerna-lite/commit/fd93826f8476dc1cfeba33a46b045fa95a7c38c7)) - by @ghiscoding

# [1.10.0](https://github.com/lerna-lite/lerna-lite/compare/v1.9.1...v1.10.0) (2022-08-06)

### Bug Fixes

* **core:** ensure to touch all nodes in package-graph ([f4f7bbc](https://github.com/lerna-lite/lerna-lite/commit/f4f7bbc60a7331a4077e2bf974bb5abffdb4e804)) - by @ghiscoding
* **deps:** update all non-major dependencies ([abe1eff](https://github.com/lerna-lite/lerna-lite/commit/abe1eff71fe211c36d05518a43f74da33967a450)) - by @renovate-bot
* **version:** get oldest commit data for changelog include commit login ([5d7464b](https://github.com/lerna-lite/lerna-lite/commit/5d7464b9224b3da39be2accefe5524ef820980d7)) - by @ghiscoding

### Features

* **version:** use conventional commit changelog writer for perf ([e9d7c52](https://github.com/lerna-lite/lerna-lite/commit/e9d7c52bdd70cac8d1c6a918c0475b613cf9817d)) - by @ghiscoding

## [1.9.1](https://github.com/lerna-lite/lerna-lite/compare/v1.9.0...v1.9.1) (2022-08-01)

**Note:** Version bump only for package @qoopido/lerna.core

# [1.9.0](https://github.com/lerna-lite/lerna-lite/compare/v1.8.0...v1.9.0) (2022-07-28)

### Bug Fixes

* **run-lifecycle:** lifecycle events should run to completion in series ([#275](https://github.com/lerna-lite/lerna-lite/issues/275)) ([8e45a1e](https://github.com/lerna-lite/lerna-lite/commit/8e45a1ef62dfca3a0f30f6375efc496d57f3ddc1)) - by @ghiscoding
* **version:** make sure we always have regex match array ([#271](https://github.com/lerna-lite/lerna-lite/issues/271)) ([ba34849](https://github.com/lerna-lite/lerna-lite/commit/ba348495cdefc1acbce3cec82b1c68333761cece)) - by @ghiscoding
* **version:** rename option to `--changelog-include-commits-git-author` ([b095637](https://github.com/lerna-lite/lerna-lite/commit/b095637cdf1ce57f7ecaabf06480f86623e0553e)) - by @ghiscoding

### Features

* **publish:** disable legacy `verifyAccess` behavior by default ([#274](https://github.com/lerna-lite/lerna-lite/issues/274)) ([fb1852d](https://github.com/lerna-lite/lerna-lite/commit/fb1852d09470cc6d3f74c9a8af87881686eabc34)) - by @ghiscoding
* **publish:** include all deps in package graph by default, allow no-sort ([#277](https://github.com/lerna-lite/lerna-lite/issues/277)) ([3229e77](https://github.com/lerna-lite/lerna-lite/commit/3229e7765907bf3bcf208baca876054a5a1cec5e)) - by @ghiscoding
* **version:** option to add commit login username on each changelog entry, closes [#248](https://github.com/lerna-lite/lerna-lite/issues/248) ([#272](https://github.com/lerna-lite/lerna-lite/issues/272)) ([2ca0dca](https://github.com/lerna-lite/lerna-lite/commit/2ca0dcaa005cac6306d7d24ffa4d0d8f1a45e320)) - by @ghiscoding

# [1.8.0](https://github.com/lerna-lite/lerna-lite/compare/v1.6.0...v1.8.0) (2022-07-21)

### Bug Fixes

* **deps:** update all non-major dependencies ([ed1db35](https://github.com/lerna-lite/lerna-lite/commit/ed1db352cd0853dd338bb4a7ebf7998b99eb9f36)) (by _Renovate Bot_)
* **deps:** update all non-major dependencies ([#254](https://github.com/lerna-lite/lerna-lite/issues/254)) ([2d9a0d5](https://github.com/lerna-lite/lerna-lite/commit/2d9a0d563af74ad64cafad9225199668f6f6daf4)) (by _WhiteSource Renovate_)
* **deps:** update dependency @octokit/rest to v19 ([#251](https://github.com/lerna-lite/lerna-lite/issues/251)) ([d0018d7](https://github.com/lerna-lite/lerna-lite/commit/d0018d73f3b17e0d802aa998ce87004f45201d5d)) (by _WhiteSource Renovate_)
* **deps:** update dependency git-url-parse to v12 ([978bf36](https://github.com/lerna-lite/lerna-lite/commit/978bf3666c0d0cdc78e133066b3caf69d127213c)) (by _Renovate Bot_)

### Features

* filter for lerna tags in independent mode ([#267](https://github.com/lerna-lite/lerna-lite/issues/267)) ([8c3cdb3](https://github.com/lerna-lite/lerna-lite/commit/8c3cdb38528baf7a4075c846bc33c8933a1a5c0b)) (by _Ghislain B_)
* **version:** add flag to include changelog commit author, close [#248](https://github.com/lerna-lite/lerna-lite/issues/248) ([#253](https://github.com/lerna-lite/lerna-lite/issues/253)) ([7fd8db1](https://github.com/lerna-lite/lerna-lite/commit/7fd8db1c80c1da9d857cdac13c6c6cea1c5b8a69)) (by _Ghislain B_)
* **version:** provide custom format to include commit author fullname ([#269](https://github.com/lerna-lite/lerna-lite/issues/269)) ([1f5a94e](https://github.com/lerna-lite/lerna-lite/commit/1f5a94e06de01ceb8143886b5c00fe845173ee9f)) (by _Ghislain B_)

# [1.6.0](https://github.com/lerna-lite/lerna-lite/compare/v1.5.1...v1.6.0) (2022-06-30)

### Bug Fixes

* **deps:** update all non-major dependencies ([27921f4](https://github.com/lerna-lite/lerna-lite/commit/27921f4a027bac239eb13d99fd2ab268781cf36c))
* **run:** Nx correctly detect if target dependencies default are set ([4720351](https://github.com/lerna-lite/lerna-lite/commit/47203516ce87830bce8ce6275f5414190c842480))
* **version:** remove `workspace:` prefix on peerDeps & few refactor ([6e4e5b7](https://github.com/lerna-lite/lerna-lite/commit/6e4e5b7b75effb8f48957bc098edb47a6251cee2))

### Features

* **changed:** add Lerna `changed` as optional command ([b08417c](https://github.com/lerna-lite/lerna-lite/commit/b08417c125e6dd4a5a7348e9a1e64b1415dbef90))
* **diff:** add Lerna `diff` as optional command ([44dabb2](https://github.com/lerna-lite/lerna-lite/commit/44dabb21de678822188929fd5effe27ddd7f1e6c))

## [1.5.1](https://github.com/lerna-lite/lerna-lite/compare/v1.5.0...v1.5.1) (2022-06-12)

### Bug Fixes

* **version:** remove `workspace:` prefix on external deps, fixes [#200](https://github.com/lerna-lite/lerna-lite/issues/200) ([8d89256](https://github.com/lerna-lite/lerna-lite/commit/8d89256705e6f70b07213d823d3175c0bcf65598))

# [1.5.0](https://github.com/lerna-lite/lerna-lite/compare/v1.4.0...v1.5.0) (2022-06-08)

### Bug Fixes

* **deps:** update all non-major dependencies ([c87e937](https://github.com/lerna-lite/lerna-lite/commit/c87e937da725a1d8fa1d685bc3957baf0bcedcee))
* **deps:** update dependency @npmcli/run-script to v4 ([29a09a9](https://github.com/lerna-lite/lerna-lite/commit/29a09a99204e7faafa626173d39ad9752efe891d))
* **lock:** add `--package-lockfile-only` to update lock file ([200e385](https://github.com/lerna-lite/lerna-lite/commit/200e38500e046fb99e716b5bc1fc9d87a9c14aab))
* **version:** keep operator in `workspace:` protocol, fixes [#198](https://github.com/lerna-lite/lerna-lite/issues/198) ([1794ccd](https://github.com/lerna-lite/lerna-lite/commit/1794ccd769d90a47671a5f4b62c065cec39a401a))
* **version:** support for updating pnpm-lock.yaml ([509ca33](https://github.com/lerna-lite/lerna-lite/commit/509ca3308a76557891feefa5a0f69e350a0687b7))

# [1.4.0](https://github.com/lerna-lite/lerna-lite/compare/v1.3.0...v1.4.0) (2022-05-30)

### Bug Fixes

* **core:** replace `npm-lifecycle` with `@npmcli/run-script` ([6ab0e8d](https://github.com/lerna-lite/lerna-lite/commit/6ab0e8d90098c7d4f70bf63552c0240ba9a93e10)), closes [#60](https://github.com/lerna-lite/lerna-lite/issues/60) [#3134](https://github.com/lerna-lite/lerna-lite/issues/3134)
* **init:** add missing packages/workspaces ([f78860d](https://github.com/lerna-lite/lerna-lite/commit/f78860d158dc4e3772ca8e33113f79508c4fda83))

### Features

* **list:** add Lerna `list` as optional command ([65f810c](https://github.com/lerna-lite/lerna-lite/commit/65f810cd748b7cd06cc2e649d8513aeb7012f0ec))
* **run:** add experimental support to `run` tasks via Nx ([743d434](https://github.com/lerna-lite/lerna-lite/commit/743d4347e37198ddd6c0915f99daaf852cf800de)), closes [#3139](https://github.com/lerna-lite/lerna-lite/issues/3139)

# [1.3.0](https://github.com/lerna-lite/lerna-lite/compare/v1.2.0...v1.3.0) (2022-05-13)

### Features

* **init:** add Lerna `init` command to get started ([dfc3311](https://github.com/lerna-lite/lerna-lite/commit/dfc33114e9f17310f36427bc4e0905c634a82bb5))
* **publish:** `workspace:*` (or ~) protocol should strictly match range ([acede60](https://github.com/lerna-lite/lerna-lite/commit/acede60425c9a9b136b86be74b2ef59c03b63646))

# [1.2.0](https://github.com/lerna-lite/lerna-lite/compare/v1.1.1...v1.2.0) (2022-05-11)

### Bug Fixes

* **url:** deprecation notice of git.io ([816b7cb](https://github.com/lerna-lite/lerna-lite/commit/816b7cbdaca6eb4411097c517c6e29c6a7008cdd)), closes [#3116](https://github.com/lerna-lite/lerna-lite/issues/3116)

### Features

* **core:** add version/publish `workspace:` protocol ([ee57dfb](https://github.com/lerna-lite/lerna-lite/commit/ee57dfbb3ad26cd4bd722e1b54941360ec22f698))
* **core:** Support the `workspace:` protocol ([67d8ba1](https://github.com/lerna-lite/lerna-lite/commit/67d8ba18be5ba915547b8d8eda2c46b13f6410d2))

# [1.1.0](https://github.com/lerna-lite/lerna-lite/compare/v1.0.5...v1.1.0) (2022-05-01)

**Note:** Version bump only for package @qoopido/lerna.core

## [1.0.5](https://github.com/lerna-lite/lerna-lite/compare/v1.0.4...v1.0.5) (2022-03-29)

### Bug Fixes

* **deps:** move ts-node to devDependencies ([dabb00f](https://github.com/lerna-lite/lerna-lite/commit/dabb00f008807c0dfba076b66c71ce3f8c2ede8f))

* relax "engines.node" version ([ee59fbc](https://github.com/lerna-lite/lerna-lite/commit/ee59fbcfc7eefa02c85ecff2babd50b1bec112ce))

## [1.0.4](https://github.com/lerna-lite/lerna-lite/compare/v1.0.3...v1.0.4) (2022-03-24)

**Note:** Version bump only for package @qoopido/lerna.core

## [1.0.3](https://github.com/lerna-lite/lerna-lite/compare/v1.0.2...v1.0.3) (2022-03-19)

**Note:** Version bump only for package @qoopido/lerna.core

## [1.0.2](https://github.com/lerna-lite/lerna-lite/compare/v1.0.1...v1.0.2) (2022-03-17)

### Bug Fixes

* **version:** shown repo info when Create Release is enabled in dry-run ([5b0cf6d](https://github.com/lerna-lite/lerna-lite/commit/5b0cf6d7ed9df1cfbae0072a9402f777403c6dd6))

## [1.0.1](https://github.com/lerna-lite/lerna-lite/compare/v1.0.0...v1.0.1) (2022-03-15)

**Note:** Version bump only for package @qoopido/lerna.core

# [1.0.0](https://github.com/lerna-lite/lerna-lite/compare/v0.3.7...v1.0.0) (2022-03-15)

**Note:** Version bump only for package @qoopido/lerna.core

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

### Bug Fixes

* **version:** add missing lifecycle code from lerna ([a0d9e95](https://github.com/lerna-lite/lerna-lite/commit/a0d9e95b4e1cd80f6f6b933534364e85fa952817))

## [0.3.3](https://github.com/lerna-lite/lerna-lite/compare/v0.3.2...v0.3.3) (2022-02-27)

**Note:** Version bump only for package @qoopido/lerna.core

## [0.3.2](https://github.com/lerna-lite/lerna-lite/compare/v0.3.1...v0.3.2) (2022-02-22)

### Bug Fixes

* **core:** catch of error should work with `exitCode` and/or `code` ([461ec29](https://github.com/lerna-lite/lerna-lite/commit/461ec2943ccf48393dc5f0b105c76ee5c2260772))

* **core:** OTP please  method had non-strict code ([411f308](https://github.com/lerna-lite/lerna-lite/commit/411f3086d943e0c0d80d9c1a4745775ae7d803e9))

* **version:** add missing code conventional-preset legacy loading ([f0e105d](https://github.com/lerna-lite/lerna-lite/commit/f0e105df8acb267d00fbb46b5cc3b539af86d564))

## [0.3.1](https://github.com/lerna-lite/lerna-lite/compare/v0.3.0...v0.3.1) (2022-02-12)

### Bug Fixes

* **publish:** skip publish when using gitDryRun ([9408167](https://github.com/lerna-lite/lerna-lite/commit/9408167d0dbd8a8c962a166bd71c86220610acfd))

# [0.3.0](https://github.com/lerna-lite/lerna-lite/compare/v0.2.3...v0.3.0) (2022-02-12)

## BREAKING CHANGE

Rename the lib to Lerna-Lite

## [0.2.3](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.2.2...v0.2.3) (2022-02-11)

**Note:** Version bump only for package @ws-conventional-version-roller/core

## [0.2.2](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.2.1...v0.2.2) (2022-02-11)

**Note:** Version bump only for package @ws-conventional-version-roller/core

## [0.2.1](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.2.0...v0.2.1) (2022-02-11)

**Note:** Version bump only for package @ws-conventional-version-roller/core

# [0.2.0](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.1.8...v0.2.0) (2022-02-11)

### Bug Fixes

* **logs:** disabling the advanced terminal behavior when TERM is dumb ([9994130](https://github.com/ghiscoding/ws-conventional-version-roller/commit/99941301afe65ffd41f3f0cdc891b189cc19aed2)), closes [#2932](https://github.com/ghiscoding/ws-conventional-version-roller/issues/2932)

### Features

* **cli:** add `ws-roller` CLI for publish & version commands ([6201c1d](https://github.com/ghiscoding/ws-conventional-version-roller/commit/6201c1dc6d016b1c61b4f17855a16ca6562d013a))

* **core:** drastically reduce time taken to check for cycles ([ddbc9d5](https://github.com/ghiscoding/ws-conventional-version-roller/commit/ddbc9d5d17e021d48fe3fa0e39fcb730b27ab8fe)), closes [#2874](https://github.com/ghiscoding/ws-conventional-version-roller/issues/2874)

* **run:** add `run` command to help run workspace script in parallel ([a71191b](https://github.com/ghiscoding/ws-conventional-version-roller/commit/a71191b71b3af6ac64e9200c1ac1362efaa28b48))

## [0.1.8](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.1.7...v0.1.8) (2022-02-03)

**Note:** Version bump only for package @ws-conventional-version-roller/core

## [0.1.7](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.1.6...v0.1.7) (2022-02-03)

### Bug Fixes

* **version:** should update npm root lock file when lockfileVersion>=2 ([8bd41fc](https://github.com/ghiscoding/ws-conventional-version-roller/commit/8bd41fc76dea4e025b89380a5ef98c327f23368e))

## [0.1.4](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.1.3...v0.1.4) (2022-02-01)

**Note:** Version bump only for package @ws-conventional-version-roller/core

## [0.1.3](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.1.2...v0.1.3) (2022-01-30)

**Note:** Version bump only for package @ws-conventional-version-roller/core

## [0.1.2](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.1.1...v0.1.2) (2022-01-30)

### Bug Fixes

* **commands:** rename run to roll version/publish commands ([43e18e0](https://github.com/ghiscoding/ws-conventional-version-roller/commit/43e18e067031e6f1c7bde7aa7cfbc5ae76549f73))

* **publish:** add missing `publishConfig` to each package ([9924956](https://github.com/ghiscoding/ws-conventional-version-roller/commit/9924956f914361734d89a50f085151564ed33c02))

## [0.1.1](https://github.com/ghiscoding/ws-conventional-version-roller/compare/v0.1.0...v0.1.1) (2022-01-30)

**Note:** Version bump only for package @ws-conventional-version-roller/core

# 0.1.0 (2022-01-30)

### Bug Fixes

* **version:** should not throw when changelog.md is missing ([eca9816](https://github.com/ghiscoding/ws-conventional-version-roller/commit/eca981632fc9611f5694cb8479b0711418506a5a))

### Features

* **build:** initial commit with publish & version roller ([37e32c0](https://github.com/ghiscoding/ws-conventional-version-roller/commit/37e32c0af59b01d2516a8ee89828bd35ad4054cb))
