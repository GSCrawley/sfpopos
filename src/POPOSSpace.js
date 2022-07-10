import React from 'react'
import './POPOSSpace.css'

function POPOSSpace(props) {
    const {name, image, address, hours} = props;
    return (
        <div className = 'POPOSSpace'>
             <div>{address}</div>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`}     
                width="300"
                height="300"
                alt="Hello"
            />
            <h1>{name}</h1>
            <div className="hours">{hours}</div>
           
        </div>
    )
}

export default POPOSSpace