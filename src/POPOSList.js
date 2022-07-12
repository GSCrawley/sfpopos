import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'


function POPOSList() {
    const spaces = data.map((obj) => {
        const { title, desc, address, images, hours } = obj
        return (
            <POPOSSpace
                key={title}
                address={address}
                image={images[0]}
                name={title}
                hours={hours}
            />
        )
    })
    return (
        <div className="container">
        <div className="POPOSList">
           { spaces }
        </div>
        </div>
    )
}



export default POPOSList

