import { nest } from 'd3-collection'
import { quantile, ascending } from 'd3-array'
import { scaleLinear, scaleBand } from 'd3-scale'

const shapes = {
  A: (s) =>
    `M${0.5 * s} 0A ${0.5 * s} ${0.5 * s} 0 0 0 ${s} ${0.5 * s}A${0.5 * s} ${
      0.5 * s
    } 0 0 0 ${0.5 * s} ${s}A${0.5 * s} ${0.5 * s} 0 0 0 0 ${0.5 * s}A${
      0.5 * s
    } ${0.5 * s} 0 0 0 ${0.5 * s} 0`,
  B: (s) =>
    `M${0.5 * s} ${0.2 * s}A ${0.4 * s} ${0.4 * s} 0 0 0 ${0.8 * s} ${
      0.5 * s
    }A${0.4 * s} ${0.4 * s} 0 0 0 ${0.5 * s} ${0.8 * s}A${0.4 * s} ${
      0.4 * s
    } 0 0 0 ${0.2 * s} ${0.5 * s}A${0.4 * s} ${0.4 * s} 0 0 0 ${0.5 * s} ${
      0.2 * s
    }`,
  C: (s) => `M${0.5 * s} 0L${s} ${0.5 * s}L${0.5 * s} ${s} L0 ${0.5 * s}Z`,
  D: (s) => `M${0.5 * s} 0L0 ${0.5 * s}L${s} ${0.5 * s}L${0.5 * s} ${s}Z`,
  E: (s) =>
    `M0 ${0.5 * s}A${0.5 * s} ${0.5 * s} 0 0 0 ${s} ${0.5 * s}A${0.5 * s} ${
      0.5 * s
    } 0 0 0 0 ${0.5 * s}`,
  F: (s) =>
    `M${0.2 * s} ${0.5 * s}A${0.4 * s} ${0.4 * s} 0 0 0 ${0.8 * s} ${0.5 * s}A${
      0.4 * s
    } ${0.4 * s} 0 0 0 ${0.2 * s} ${0.5 * s}`,
  G: (s) =>
    `M${0.2 * s} ${0.5 * s}A${0.3 * s} ${0.3 * s} 0 0 0 ${0.8 * s} ${0.5 * s}A${
      0.3 * s
    } ${0.3 * s} 0 0 0 ${0.2 * s} ${0.5 * s}`,
  H: (s) =>
    `M${0.2 * s} ${0.5 * s}A${0.4 * s} ${0.4 * s} 0 0 0 ${0.8 * s} ${0.5 * s}A${
      0.4 * s
    } ${0.4 * s} 0 0 0 ${0.2 * s} ${0.5 * s}` +
    `M${0.5 * s} ${0.2 * s} A${0.4 * s} ${0.4 * s} 0 0 0 ${0.5 * s} ${
      0.8 * s
    }A${0.4 * s} ${0.4 * s} 0 0 0 ${0.5 * s} ${0.2 * s}`,

  I: (s) =>
    `M0 0L0 ${0.6 * s}L${9 * s} ${9 * s}L${0.6 * s} 0ZM${0.8 * s} ${0.8 * s}L${
      9 * s
    } ${0.1 * s}0L${0.1 * s}0 ${9 * s}Z`,

  J: (s) =>
    `M${0.1 * s} ${0.1 * s}L${0.1 * s} ${9 * s}L${9 * s} ${9 * s}L${9 * s} ${
      0.1 * s
    }Z`,

  K: (s) =>
    `M${0.2 * s} ${0.2 * s}L${0.2 * s} ${0.8 * s}L${0.8 * s} ${0.8 * s}L${
      0.8 * s
    } ${0.2 * s}Z`,

  L: (s) => `M${0.5 * s} 0L0 ${0.8 * s}L${0.1 * s}0 ${0.8 * s}Z`,

  M: (s) =>
    `M${0.5 * s} ${0.3 * s}L${0.1 * s} ${0.6 * s}L${9 * s} ${0.6 * s}ZM${
      0.5 * s
    } ${9 * s}L${0.1 * s} ${0.3 * s}L${9 * s} ${0.3 * s}Z`,
}

// shapes[A](10)

export function symbol(key, size) {
  return shapes[key](size)
}
/**
 * Get a scale function mapping the values between a range of lower and upper values
 *
 * @param {array} values
 * @param {array[2]} bounds
 * @param {number} buffer
 * @returns
 */
export function getScale(values, bounds, buffer = 0) {
  if (values.some(isNaN)) {
    return scaleBand()
      .range(bounds)
      .domain(values)
      .paddingInner(1)
      .paddingOuter(0.5)
  } else {
    const min = Math.min(...values)
    const max = Math.max(...values)
    const margin = (max - min) * buffer
    return scaleLinear()
      .domain([min - margin, max + margin])
      .range(bounds)
  }
}

/**
 * Obtain the scale function for the `x` and `y` fields in the data set.
 *
 * @param {array<dict>} data
 * @param {string} x
 * @param {string} y
 * @param {number} width
 * @param {number} height
 * @returns
 */
export function getScales(data, x, y, width, height) {
  const xValues = [...new Set(data.map((item) => item[x]))]
  const yValues = [...new Set(data.map((item) => item[y]))]

  return {
    scaleX: getScale(xValues, [0, width]),
    scaleY: getScale(yValues, [height, 0], 0.1),
  }
}

/**
 * Summarize `data` by fields `x` and `y` and return a nested array with
 * key as unique `x` values and value as statistical summaries of `y` values
 *
 * @param {*} data
 * @param {*} x
 * @param {*} y
 * @returns
 */
export function aggregate(data, x, y) {
  const summary = nest()
    .key((d) => d[x])
    .rollup((d) => {
      let values = d.map((g) => g[y]).sort(ascending)
      let q1 = quantile(values, 0.25)
      let q3 = quantile(values, 0.75)
      let median = quantile(values, 0.5)
      let interQuantileRange = q3 - q1
      let min = q1 - 1.5 * interQuantileRange
      let max = q3 + 1.5 * interQuantileRange
      return { q1, q3, median, interQuantileRange, min, max }
    })
    .entries(data)
  return summary
}
