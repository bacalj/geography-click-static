
import { 
  renderMap, 
  allShuffled, 
  countryClicked,
  buildName
} from './lib.js'

document.addEventListener('DOMContentLoaded', () => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert('Darn.  This doesn\'t work on mobile yet. Check back someday soon.')
  } 
  
  else{
    const game = document.querySelector('#container')
    const countryDisplay = document.querySelector('#country-display')
    const skipper = document.querySelector('#skip')

    countryDisplay.innerHTML = ''
    
    let theMap = renderMap()
    const theDeck = allShuffled()
    
    var countryIndex = 0
    let countryUp = theDeck[countryIndex]

    async function advance(){
      countryIndex++
      if (countryIndex == 202){
        countryIndex = 0
      }
      countryUp = theDeck[countryIndex]

      const fullName = buildName(countryUp).then((arr) => {
        let asString = arr.join(' / ')
        //console.log("INIT: ", asString)
        countryDisplay.innerHTML = asString
      })
      
      
      //countryDisplay.innerHTML = fullName
      
    }
    
    const fullName = buildName(countryUp).then((arr) => {
      let asString = arr.join(' / ')
      //console.log("INIT: ", asString)
      countryDisplay.innerHTML = asString
    })

   // 

    function handleClickTap(e){
      e.preventDefault()

      let hcClicked = countryClicked(e)["hc-key"]
      let indexClicked = _.findIndex(theMap.series[0].data, { 'hc-key': hcClicked })

      if (hcClicked == countryUp.hc ){
        
        // update the map
        theMap.series[0].data[indexClicked].update({color: '#3fd97c'}) // color correct green
    
        // load next country
        advance()
      }

      else {
        theMap.series[0].data[indexClicked].update({color: '#e65e6c'}) // color incorrect red
        window.setTimeout(() => {
          theMap.series[0].data[indexClicked].update({color: '#ffffc2'}) // color land brown
        }, 1000)
      }
    }

    game.addEventListener('touchstart', e => {
      handleClickTap(e)
    });

    game.addEventListener('click', e => {
      handleClickTap(e)
    });

    skipper.addEventListener('click', function(){
      advance()
    })
  }
  


}, false);