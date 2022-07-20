import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js'


function POPOSList() {
    const [ query, setQuery ] = useState('')
    const spaces = data.filter((obj) => {
        const inTitle = obj.title.includes(query)
        const inAddress = obj.address.includes(query)
        const inFeatures = obj.features.includes(query)
        return inTitle || inAddress || inFeatures
    }).map((obj) => {
        const { id, title, address, images, hours, features } = obj

        return (
            <POPOSSpace
                id={id}
                key={`${title}-${id}`}
                address={address}
                image={images[0]}
                name={title}
                features={features}
                hours={hours}
            />
    )})

    return (
        <div className="container">
            <div className="POPOSList">
                <form>
                    <input
                        value={query}
                        placeholder="search"
                        onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                </form>
                { spaces }
        </div>
        </div>
    )
}


export default POPOSList

