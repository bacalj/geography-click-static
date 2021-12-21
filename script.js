
import { 
  renderMap, 
  allShuffled, 
  countryClicked
} from './lib.js'

document.addEventListener('DOMContentLoaded', () => {

  const game = document.querySelector('#container')
  const countryDisplay = document.querySelector('#country-display')
  const feedback = document.querySelector('#feedback')

  countryDisplay.innerHTML = ''
  feedback.innerHTML = ''
  
  let theMap = renderMap()
  const theDeck = allShuffled()
  var ci = 0
  let up = theDeck[ci]
  
  countryDisplay.innerHTML = up.name

  game.addEventListener('click', e => {
    if (countryClicked(e)["hc-key"] == up.hc ){
      // update the map
      console.log(countryClicked(e))

      // load up next country
      ci++
      up = theDeck[ci]
      countryDisplay.innerHTML = up.name
      feedback.innerHTML = '😀'
    }

    else {
      feedback.innerHTML = '😞'
    }

    // ok this will consistently recolor the faroe islands, so we need to map to correct data item to update
    console.log(theMap.series[0].data[0].update({color: '#bada55'}))
    //theMap.redraw()
    
  });
}, false);


  

  




