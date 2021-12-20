export function foo(){
    console.log('foo')
}

export function proceed(prompted, clicked){
    console.log(prompted, clicked)
}

export function runGame(){

    var theChart = null
    var extracted = []

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
              width:400,
              plotBackgroundImage: './sphere.png',
              events: {
                click: function(e) {
                    proceed('foo', e.srcElement.point.properties)
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
}