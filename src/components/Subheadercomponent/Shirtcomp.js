import React from 'react'
import "../Cart.css";
// destructing

export default function ShirtComp({data}) {
  return (
    <div className='parent'>
        {
          data.shirtData.map((ele) => {
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
