# BrubeckScan

[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org) ![GitHub](https://img.shields.io/github/license/adamphivo/brubeckapi) ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/adamphivo/brubeckapi/main.yml?branch=main) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/adamphivo/brubeckapi) ![GitHub last commit](https://img.shields.io/github/last-commit/adamphivo/brubeckAPI) ![GitHub issues](https://img.shields.io/github/issues/adamphivo/brubeckAPI) ![GitHub Repo stars](https://img.shields.io/github/stars/adamphivo/brubeckAPI?style=social)

![alt text](./SCREEN.png)

## Overview

BrubeckScan monorepo

### packages/client

- SvelteKit and gateway to main API

### packages/server

- Main API

#### Stack

- Node / Express / PrismaORM / socket.io

### packages/common

- Types and common utilitaries.

## Public API Routes

- GET api/nodes/[ethereumAddress]

## API Response Format

- [JSend](https://github.com/omniti-labs/jsend)

## Environment

- Node : v18.12.1
