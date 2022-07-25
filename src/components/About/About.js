import React from 'react'
import './About.css'
import data from '../../sfpopos-data.js'
import POPOSSpace from '../POPOSSpace/POPOSSpace';




// map data into array of image tags then loop over the tags.

function About() {
  const aboutImg = data.map((obj) => {
    const { id, title, images, } = obj
      return (
                <POPOSSpace
                    id={id}
                    key={`${title}-${id}`}
                    image={images[0]}
                    
                />
        )})

        return (
            <div className="container">
                <div className="AboutImage">
                 { aboutImg }
                 </div>
      <p>POPOS are publicly accessible spaces in
        forms of plazas, terraces, atriums, small
        parks, and even snippets which are provided
        and maintained by private developers. In San
        Francisco, POPOS mostly appear in the Downtown
        office district area.</p>
    </div>  
  
    )
}


export default About