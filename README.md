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

## Caveats

When using different pattern and color combinations for patterns on a single page, be sure to provide a different prefix for the `brew` function. This ensures that each pattern is uniquely identifiable by the browser.
