# D3 Charts for Svelte

The core idea behind the implementation is to use the respective strengths of both D3 and Svelte to build Themable, Composable, Animated, Responsive, Accessible and Reactive Data Visualization.

- [D3](https://d3js.org/) is a wonderful library for working with SVG that provides large set of utility functions for graph visualization that includes the computation of scales, interpolation, shapes, and more.
- [Svelte](https://svelte.dev/) is an awesome javascript framework to build user interfaces. Svelte provides modularization, interactivity, reactivity, and responsiveness.

This component library has been heavily inspired by the following works, and has borrowed concepts from them.

- [Introduction to Accessible Contrast and Color for Data Visualization](https://observablehq.com/@frankelavsky/chartability-contrast-series) by [Frank Elavsky](https://observablehq.com/@frankelavsky)
- [Animated, Responsive, and Reactive Data Visualization with Svelte](https://www.infoq.com/news/2020/10/svelte-d3-animation-data-vis/)
- [Barchart Race using Svelte & D3](https://t.co/iIoJw4f7Jc?amp=1) by [Amelia Wattenberger](https://mobile.twitter.com/Wattenberger) & [Russell Goldenberg](https://mobile.twitter.com/codenberg)
- [The D3.js Graph Gallery](https://www.d3-graph-gallery.com/index.html)

## Getting Started

Get started quickly using [degit](https://github.com/Rich-Harris/degit).

```bash
degit jerrythomas/charts/examples/graphs my-app
```

## Features

- [x] Fill patterns
- [x] Symbols
- [x] Colors
- [ ] Themes

### Plots

- [ ] Box
- [ ] Violin
- [ ] Scatter
- [ ] Line
- [ ] Histogram
- [ ] StackedBar

All plots are vertical for now.

### Chart

- [x] Axis
- [x] Grid
- [ ] Margins
- [ ] Legend
- [ ] Composable
- [ ] Combine multiple plots
- [ ] Animation
- [ ] Time lapse
  - [ ] Sliding window
  - [ ] Rolling window
