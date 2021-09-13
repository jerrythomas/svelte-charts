import { nest } from 'd3-collection'
import { quantile, ascending } from 'd3-array'
import { getScale } from './utils'

/**
 * axis, theme, params, fields
 */
export class ChartBrewer {
  constructor(data, x, y) {
    this.data = data
    this.x = x
    this.y = y
    this.fill = x
    this.axis = {}
    this.stats = {}
    // this.yOffset = 20
    this.padding = 10
    this.margin = {
      left: 10,
      top: 10,
      right: 10,
      bottom: 10,
    }
    this.params = {
      ticks: {},
    }
    this.labels = []
    this.width = 800
    this.height = (this.width * 7) / 16
    this.scaleValues = null
    this.theme = {}
  }

  computeMargin(xAxisOrientation, yAxisOrientation) {
    this.scaleValues = {
      x: [...new Set(this.data.map((item) => item[this.x]))],
      y: [...new Set(this.data.map((item) => item[this.y]))],
      fill: [...new Set(this.data.map((item) => item[this.fill]))],
    }

    let xOffset =
      Math.max(...this.scaleValues.y.map((value) => value.toString().length)) *
      10
    let yOffset = 20

    this.margin = {
      left: this.padding + (yAxisOrientation === 'left' ? xOffset : 0),
      right: this.padding + (yAxisOrientation === 'left' ? 0 : xOffset),
      top: this.padding + (xAxisOrientation === 'bottom' ? 0 : yOffset),
      bottom: this.padding + (xAxisOrientation === 'bottom' ? yOffset : 0),
    }
  }

  computeAxis() {
    let x = {}
    let y = {}
    let fill = {}

    if (!this.scaleValues) {
      this.computeMargin('bottom', 'left')
    }
    console.log(this.margin)
    x.scale = getScale(
      this.scaleValues.x,
      [this.margin.left, this.width - this.margin.right],
      0.1
    )
    y.scale = getScale(
      this.scaleValues.y,
      [this.height - this.margin.bottom, this.margin.top],
      0.1
    )

    x.ticks = tickValues(x.scale, 'x', this.params)
    y.ticks = tickValues(y.scale, 'y', this.params)

    // console.log('X Offset', this.xOffset)

    // delete x.values
    // delete y.values
    this.axis = { x, y, fill }
    return this
  }
  use(theme) {
    this.theme = theme
    return this
  }

  params(margin, ticks) {
    return this
  }

  fillWith(fill) {
    return this
  }

  highlight(values) {
    return this
  }

  animate() {
    return this
  }

  summarize() {
    return this
  }
}

function tickValues(scale, whichAxis, params) {
  let { values, count } =
    whichAxis in params.ticks ? params.ticks[whichAxis] : {}
  values =
    values?.length > 2
      ? values
      : scale.ticks
      ? scale.ticks.apply(scale, [count])
      : scale.domain()
  const ticks = values.map((label) => ({ label, position: scale(label) }))

  return ticks
}
