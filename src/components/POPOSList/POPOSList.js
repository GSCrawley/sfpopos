import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.json'


function POPOSList() {
    const [ query, setQuery ] = useState('')
    const spaces = data
    .filter(obj => obj.title.includes(query) || obj.address.includes(query))
    .map(({ title, address, images, hours }, i) => {
        return (
            <POPOSSpace
                id={i}
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

