
import { 
  renderMap, 
  allShuffled, 
  countryClicked
} from './lib.js'

document.addEventListener('DOMContentLoaded', () => {

  const game = document.querySelector('#container')
  const countryDisplay = document.querySelector('#country-display')
  const feedback = document.querySelector('#feedback')
  const skipper = document.querySelector('#skip')

  countryDisplay.innerHTML = ''
  feedback.innerHTML = ''
  
  let theMap = renderMap()
  const theDeck = allShuffled()
  var ci = 0
  let up = theDeck[ci]

  function advance(){
    ci++
    up = theDeck[ci]
    countryDisplay.innerHTML = up.name
  }
  
  countryDisplay.innerHTML = up.name

  game.addEventListener('click', e => {
    let hcClicked = countryClicked(e)["hc-key"]
    let indexClicked = _.findIndex(theMap.series[0].data, { 'hc-key': hcClicked })

    if (hcClicked == up.hc ){
      // update the map
      theMap.series[0].data[indexClicked].update({color: '#29b962'}) // color correct green
  
      // load up next country
      advance()
      feedback.innerHTML = '😀'
    }

    else {
      theMap.series[0].data[indexClicked].update({color: '#b92938'}) // color incorrect red
      window.setTimeout(() => {
        theMap.series[0].data[indexClicked].update({color: '#fefefe'}) // color land brown
      }, 1000)
      feedback.innerHTML = '😞'
    }
    
  });

  skipper.addEventListener('click', function(){
    advance()
  })


}, false);


  

  




