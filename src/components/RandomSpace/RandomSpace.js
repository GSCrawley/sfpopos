import React from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../../sfpopos-data.json'
import './RandomSpace.css'

function RandomSpace() {
        const navigate = useNavigate()
    return (
            <button className='random'
                onClick={(e) => {
                    const id = Math.floor(Math.random() * data.length)
                    navigate(`/details/${id}`)  
                }}><small>RANDOM</small></button>
    )
}

export default RandomSpace