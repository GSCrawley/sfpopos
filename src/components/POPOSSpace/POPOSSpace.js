import React from 'react'
import { Link } from 'react-router-dom'
import './POPOSSpace.css'

function POPOSSpace(props) {
    const {name, image, address, hours, id} = props;
    return (
        <div className = 'POPOSSpace'>
             <div>{address}</div>
             <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
                width="400"
                height="400"
                alt="Hello"
            />
            </Link>
            <Link to={`/details/${id}`}>
                <h1>{name}</h1>
                </Link>
            <div className="hours">{hours}</div>
        </div>
    )
}

export default POPOSSpace