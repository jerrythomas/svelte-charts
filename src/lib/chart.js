import { scaleBand, scaleLinear } from 'd3-scale'

export function getLabels(data, fields, theme) {}

function tickValues(scale, tickParams, axis) {
  let { values, count } = axis in tickParams ? tickParams[axis] : {}
  values =
    values?.length > 2
      ? values
      : scale.ticks
      ? scale.ticks.apply(scale, [count])
      : scale.domain()
  const ticks = values.map((label) => ({ label, position: scale(label) }))

  return ticks
}

export function getAxis(data, fields, params) {
  let x = {}
  let y = {}
  let fill = {}

  x.values = [...new Set(data.map((item) => item[fields.x]))]
  y.values = [...new Set(data.map((item) => item[fields.y]))]
  fill.values = [...new Set(data.map((item) => item[fields.fill]))]

  x.scale = getScale(
    x.values,
    [params.margin.left, params.width - params.margin.right],
    0.1
  )
  y.scale = getScale(
    y.values,
    [params.height - params.margin.bottom, params.margin.top],
    0.1
  )

  x.ticks = tickValues(x.scale, params.ticks, 'x')
  y.ticks = tickValues(y.scale, params.ticks, 'y')

  delete x.values
  delete y.values

  return { x, y, fill }
}

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
