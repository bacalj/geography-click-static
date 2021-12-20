document.addEventListener('DOMContentLoaded', function () {
  console.log('dom loaded')
  window.setTimeout(function(){
    console.log(theChart, extracted)
  }, 500)

  // window.setInterval(function(){
  //   console.log(theChart.mapView.projection.options.rotation[0]++)
  //   console.log(theChart.mapView.projection.options.rotation[1]++)
  // }, 100)
}, false);

var extracted = []
var theChart = null

Highcharts.getJSON(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@2e11000c966a20f08afc4e0927b91df99821de99/samples/data/world-countries.topo.json',
    
    topology => {
  
      const globo = window.topojson.feature(
        topology,
        topology.objects[Object.keys(topology.objects)[0]]
      );
    
      theChart = Highcharts.mapChart('container', {
        chart: {
          map: globo,
          events: {
            click: function(e) {
                console.log(e.srcElement.point.properties)
            }
          }
        },
  
        title: {
          text: null
        },
  
        legend: {
          enabled: false
        },
  
        mapView: {
            projection: {
                name: 'Orthographic',
                rotation: [60, -30]
            }
        },
  
        series: [[]]
      });

      extracted = theChart.series[0].data.map((i) => {
        return i.options.properties
      })

    }
    
  )

  

  




