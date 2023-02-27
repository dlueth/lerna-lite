[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dy/@qoopido/lerna.diff?color=forest)](https://www.npmjs.com/package/@qoopido/lerna.diff)
[![npm](https://img.shields.io/npm/v/@qoopido/lerna.diff.svg?logo=npm&logoColor=fff)](https://www.npmjs.com/package/@qoopido/lerna.diff)

# @qoopido/lerna.diff

## (`lerna diff`) - Diff command [optional] 🌓

Diff all packages or a single package since the last release

---

## Installation

```sh
npm install @qoopido/lerna.diff -D -W

# then use it (see usage below)
lerna diff
```

## Usage

```sh
$ lerna diff [package]

$ lerna diff

# diff a specific package
$ lerna diff package-name
```

Diff all packages or a single package since the last release.

> Similar to `lerna changed`. This command runs `git diff`.
