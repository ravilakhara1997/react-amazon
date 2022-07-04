import React from 'react'
import "../Cart.css"

export default function PantComp({data}) {
  return (
    <div className='parent'>
        {
          data.pantData.map((ele) => {
            return (
              <div className='cart'>
                <div className='shirt'>
                  <img src={ele.image} />
                </div>
                <div className='details'>
                  <div className='title'>{ele.title}</div>
                  <div className='price'>{ele.price}</div>
                  <div className='quantity'>{ele.quantity}</div>
                  <button >Add to Cart</button>

                </div>
              </div>

            )
          })
        }
      </div>
  )
}
