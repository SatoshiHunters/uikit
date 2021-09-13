# 🥞 Satoshi UIkit

[![Version](https://img.shields.io/npm/v/@satoshihunters/uikit)](https://www.npmjs.com/package/@satoshihunters/uikit) [![Size](https://img.shields.io/bundlephobia/min/@satoshihunters/uikit)](https://www.npmjs.com/package/@satoshihunters/uikit)

Satoshi UIkit is a set of React components and hooks used to build pages on Satoshi's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @satoshihunters/uikit`

## Setup

### Theme

Before using Satoshi UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@satoshihunters/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@satoshihunters/uikit'
...
<ResetCSS />
```
