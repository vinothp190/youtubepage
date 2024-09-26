import React from 'react'
import Slide from './Slide'
import Conheader from './Conheader'
import Videos from './Videos'


export default function Mainboby() {
  return (
    <div className="body-container">

        <Slide />
        <div class="content">
            <Conheader />
            <Videos />
        
        </div>

        
    </div>
  )
}
