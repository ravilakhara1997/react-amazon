import React from 'react'
import data from "../Object.js"
import ShirtComp from './ShirtComp.js'

export default function Shirt({addToCart}) {
  let shirtData = data.filter(ele=>ele.type=="shirt")
  return (
    <ShirtComp data={{shirtData}}/>
      )
}
