import React from 'react'
import './Navbar.css'

let Navbar = (Navs) => {
    return (
        <div className='Navbar'>
            <nav className='Nav'>
                <ul className='nav nav-pills'>
                    {
                        Navs.Nav.map((element, key) => {
                            return (
                                <li className='nav-item' key={key}>
                                    {
                                        key === 0 ? <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill">
                                            {element}
                                        </button> : <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill">
                                            {element}
                                        </button>
                                    }

                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar