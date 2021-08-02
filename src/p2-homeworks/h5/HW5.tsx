import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Routes from './Routes'

function HW5() {
    return (
        <div>
            <hr/>
            Homework 5:
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
