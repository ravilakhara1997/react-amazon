import React from 'react'
import './header.css'

export default function Header({ setInputState }) {
    function manageInput(e) {
        let { value } = e.target
        console.log(value);
        setInputState.setInputState(value)
    }
    return (

        <div className="header">
            <div className="img-container">

                <img src="/images/logo.png" />

            </div>
            <div className="content-container">
                <div className="hello">Hello</div>
                <div className="Address">Select your address</div>
            </div>

            <div className="search-parent">

                <input type="text" placeholder="Search your product here" onChange={manageInput} />
            </div>




        </div>


    )
}
