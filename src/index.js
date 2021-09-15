export { toHexString, initCap, uniqueId } from './lib/utils'

import Symbol from './chart/Symbol.svelte'
import PatternDefs from './chart/PatternDefs.svelte'
import Swatch from './chart/Swatch.svelte'

import Axis from './chart/Axis.svelte'
import Grid from './chart/Grid.svelte'

// import Plot from './plots/Plot.svelte'
import BoxPlot from './plots/BoxPlot.svelte'
import ViolinPlot from './plots/ViolinPlot.svelte'
import ScatterPlot from './plots/ScatterPlot.svelte'

import Chart from './chart/Chart.svelte'
import TimelapseChart from './chart/TimelapseChart.svelte'

export { brewer, uniques, slidingWindow } from './lib'
export {
  Symbol,
  PatternDefs,
  Swatch,
  Axis,
  Grid,
  // Plot,
  BoxPlot,
  ViolinPlot,
  ScatterPlot,
  Chart,
  TimelapseChart,
}
