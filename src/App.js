import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Menu from './API/Food Api'
import Post from './Components/Post'
import { useState, useEffect } from 'react'

const App = () => {
    let [Nav, setNav] = useState([]);

    let DisplayNav = () => {
        let TempNav = [...new Set(
            Menu.map((Elem) => {
                return Elem.category;
            })
        ),"All"];

        setNav(TempNav)
    }

    useEffect(() => {
        DisplayNav();
    },[])


    return (
        <div>
            <Navbar Nav={Nav} />

            <Post/>
        </div>
    )
}

export default App