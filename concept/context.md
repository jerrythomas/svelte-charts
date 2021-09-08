# Charts for Svelte

The core idea behind the implementation is to use the respective strengths of both D3 and Svelte to build Themable, Composable, Animated, Responsive, and Reactive Data Visualization.

[D3](https://d3js.org/) is a wonderful library for working with SVG that provides large set of utility functions for graph visualization that includes the computation of scales, interpolation, shapes, and more. [Svelte](https://svelte.dev/) is an awesome javascript framework to build user interfaces. It provides modularization, interactivity, reactivity, and responsiveness.

## Chart

A chart consists of the followi key elements.

- Axis
- Plot

## Theme v/s Params

A chart
What are some attributes that should be consistent across charts? These should be theme attributes.

- Background
- Grid lines
- Axis
- Ticks
- Axis labels
- Tick Labels
- Axis origin

## Chart specific attributes

- Highlight/Spotlight
- Colors fill/stroke
- Patterns fill/stroke

- Tick counts/values/range
- Tick Label Text
- Axis Label Text

Brewers

chart(data, fields).theme().params().brew()
transform(data)
.density()/histogram
.sort()
.highlight(callback)
