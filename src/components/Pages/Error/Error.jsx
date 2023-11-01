import React from 'react'
import "../Common/common.css"
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div className='error'>
            <img src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" alt="ERROR 404" />
            <NavLink to="/">
                <button>Go Back</button>
            </NavLink>
        </div >
    )
}

export default Error