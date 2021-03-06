
export function renderMap(){

    var theData = [
        ['fo', 0],
        ['us', 0],
        ['jp', 0],
        ['in', 0],
        ['kr', 0],
        ['fr', 0],
        ['cn', 0],
        ['sw', 0],
        ['sh', 0],
        ['ec', 0],
        ['au', 0],
        ['ph', 0],
        ['es', 0],
        ['bu', 0],
        ['mv', 0],
        ['sp', 0],
        ['ve', 0],
        ['gb', 0],
        ['gr', 0],
        ['dk', 0],
        ['gl', 0],
        ['pr', 0],
        ['um', 0],
        ['vi', 0],
        ['ca', 0],
        ['tz', 0],
        ['cv', 0],
        ['dm', 0],
        ['sc', 0],
        ['nz', 0],
        ['ye', 0],
        ['jm', 0],
        ['om', 0],
        ['vc', 0],
        ['bd', 0],
        ['sb', 0],
        ['lc', 0],
        ['no', 0],
        ['cu', 0],
        ['kn', 0],
        ['bh', 0],
        ['fi', 0],
        ['id', 0],
        ['mu', 0],
        ['se', 0],
        ['ru', 0],
        ['tt', 0],
        ['br', 0],
        ['bs', 0],
        ['pw', 0],
        ['ir', 0],
        ['cl', 0],
        ['gw', 0],
        ['gd', 0],
        ['ee', 0],
        ['ag', 0],
        ['tw', 0],
        ['fj', 0],
        ['bb', 0],
        ['it', 0],
        ['mt', 0],
        ['pg', 0],
        ['de', 0],
        ['vu', 0],
        ['gq', 0],
        ['cy', 0],
        ['km', 0],
        ['va', 0],
        ['sm', 0],
        ['az', 0],
        ['am', 0],
        ['sd', 0],
        ['ly', 0],
        ['tj', 0],
        ['ls', 0],
        ['uz', 0],
        ['pt', 0],
        ['mx', 0],
        ['ma', 0],
        ['ar', 0],
        ['sa', 0],
        ['nl', 0],
        ['ae', 0],
        ['ke', 0],
        ['my', 0],
        ['ht', 0],
        ['do', 0],
        ['hr', 0],
        ['th', 0],
        ['cd', 0],
        ['kw', 0],
        ['ie', 0],
        ['mm', 0],
        ['ug', 0],
        ['kz', 0],
        ['tr', 0],
        ['er', 0],
        ['tl', 0],
        ['mr', 0],
        ['dz', 0],
        ['pe', 0],
        ['ao', 0],
        ['mz', 0],
        ['cr', 0],
        ['pa', 0],
        ['sv', 0],
        ['kh', 0],
        ['gt', 0],
        ['bz', 0],
        ['kp', 0],
        ['gy', 0],
        ['hn', 0],
        ['il', 0],
        ['ni', 0],
        ['mw', 0],
        ['tm', 0],
        ['zm', 0],
        ['nc', 0],
        ['za', 0],
        ['lt', 0],
        ['et', 0],
        ['gh', 0],
        ['si', 0],
        ['ba', 0],
        ['jo', 0],
        ['sy', 0],
        ['mc', 0],
        ['al', 0],
        ['uy', 0],
        ['cnm', 0],
        ['mn', 0],
        ['rw', 0],
        ['sx', 0],
        ['bo', 0],
        ['ga', 0],
        ['cm', 0],
        ['cg', 0],
        ['eh', 0],
        ['me', 0],
        ['rs', 0],
        ['bj', 0],
        ['tg', 0],
        ['af', 0],
        ['ua', 0],
        ['sk', 0],
        ['jk', 0],
        ['pk', 0],
        ['bg', 0],
        ['ro', 0],
        ['qa', 0],
        ['li', 0],
        ['at', 0],
        ['sz', 0],
        ['hu', 0],
        ['ne', 0],
        ['lu', 0],
        ['ad', 0],
        ['ci', 0],
        ['sl', 0],
        ['lr', 0],
        ['bn', 0],
        ['be', 0],
        ['iq', 0],
        ['ge', 0],
        ['gm', 0],
        ['ch', 0],
        ['td', 0],
        ['ng', 0],
        ['kv', 0],
        ['lb', 0],
        ['dj', 0],
        ['bi', 0],
        ['sr', 0],
        ['sn', 0],
        ['gn', 0],
        ['zw', 0],
        ['pl', 0],
        ['mk', 0],
        ['py', 0],
        ['by', 0],
        ['lv', 0],
        ['bf', 0],
        ['ss', 0],
        ['na', 0],
        ['la', 0],
        ['co', 0],
        ['ml', 0],
        ['cz', 0],
        ['cf', 0],
        ['sg', 0],
        ['vn', 0],
        ['tn', 0],
        ['mg', 0],
        ['eg', 0],
        ['so', 0],
        ['is', 0],
        ['lk', 0],
        ['np', 0],
        ['kg', 0],
        ['md', 0],
        ['bt', 0],
        ['bw', 0]
    ];

    var theChart = Highcharts.mapChart('container', {
        chart: {
            map: 'custom/world-eckert3-highres',
            backgroundColor: "#1C00ff00",
            animation: false,
            styledMode: false
        },

        tooltip: {
            enabled: false
        },

        title: {
            text: null
        },

        legend: {
            enabled: false
        },

        subtitle: {
            text: null
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom',
                theme: {
                    'stroke-width': 1,                    
                    'fill': '#ffffdb',
                    'stroke': '#483C32',
                    'stroke-width': .2
                }
            }
        },

        colorAxis: {
            tickPixelInterval: 0,
            minColor: '#ffffc2', // color land yellow
            maxColor: '#ffffc2',
            max: 0
        },

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        series: [{
            data: theData,
            states: {
                hover: {
                    borderColor: "black",
                    borderWidth: 2,
                    brightness: .2
                }
            },
            dataLabels: {
                enabled: false,
            },
            borderColor: '#483C32', // color border brown
            borderWidth: 0.2,
        }]
    });

    return theChart
}

/* collects feature data from map to generate a deck of "cards" */
export function allShuffled(){
    
    const featuresArr = window.Highcharts.MapChart.maps['custom/world-eckert3-highres'].features
    
    let gameArr = featuresArr.map((feature) => {
        return {
            id: feature.id,
            hc: feature.properties['hc-key'],
            name: feature.properties.name,
            continent: feature.properties.continent,
            region: feature.properties['region-wb'],
            subregion: feature.properties.subregion
        }
    })

    return _.shuffle(gameArr)
}

export function countryClicked(e){
    return e.point.properties
}

export async function buildName(obj){

    const endpoint = `https://restcountries.com/v3.1/alpha/${obj.id}?fields=name`

    let nativeNamesArr = await fetch(endpoint)
        .then( r => r.json())
        .then( d => {
            let langsArr = Object.keys(d.name.nativeName)
            let nativeNames = langsArr.map( key => d.name.nativeName[key].common )
            return nativeNames
        }).then( (ns) => {
            return ns
        })

    if(!nativeNamesArr.includes(obj.name)){
        nativeNamesArr.push(obj.name)
    }
     
    return await nativeNamesArr


}