<script>
  function summary(data) {
    // Features of the histogram
    const histogram = histogram()
      .domain(scaleY.domain())
      .thresholds(scaleY.ticks(20)) // Important: how many bins approx are going to be made? It is the 'resolution' of the violin plot
      .value((d) => d)

    const sumstat = nest()
      .key((d) => d[x])
      .rollup((d) => {
        let input = d.map(function (g) {
          return g[y]
        })
        let bins = histogram(input) // compute the binning on it.
        return bins
      })
      .entries(data)
    // What is the biggest number of value in a bin? We need it cause this value will have a width of 100% of the bandwidth.
    var maxNum = 0
    for (i in sumstat) {
      allBins = sumstat[i].value
      lengths = allBins.map(function (a) {
        return a.length
      })
      longuest = d3.max(lengths)
      if (longuest > maxNum) {
        maxNum = longuest
      }
    }

    // The maximum width of a violin must be x.bandwidth = the width dedicated to a group
    var xNum = scaleLinear().range([0, x.bandwidth()]).domain([-maxNum, maxNum])
  }
</script>
