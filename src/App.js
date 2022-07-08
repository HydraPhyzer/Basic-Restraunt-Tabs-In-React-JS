import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Menu from './API/Food Api'
import Post from './Components/Post'
import { useState, useEffect } from 'react'

const App = () => {
    let [Nav, setNav] = useState([]);
    let [Posts, setPosts] = useState([]);

    let DisplayNav = () => {
        let TempNav = [...new Set(
            Menu.map((Elem) => {
                return Elem.category;
            })
        ), "All"];

        setNav(TempNav)
    }

    let AssignCat = (Val) => {
        if(Val!=='All')
        {
            let TempPost = Menu.filter((Elem) => {
                return Elem.category === Val;  
            })
            setPosts(TempPost)
        }
        else
        {
            setPosts(Menu)
        }
    }
    useEffect(() => {
        DisplayNav();
        AssignCat('Breakfast');
    }, [])


    return (
        <div>
            <Navbar Nav={Nav} GetCat={AssignCat} />

            <Post Posts={Posts} />
        </div>
    )
}

export default App