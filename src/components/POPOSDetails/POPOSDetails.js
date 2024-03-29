import React from 'react'
import { useParams } from 'react-router'
import './POPOSDetails.css'
import data from '../../sfpopos-data.js'
import POPOSFeatureList from '../POPOSFeature/POPOSFeatureList'
import SimpleMap from '../SimpleMap'

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>

      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">{ hours }
        <POPOSFeatureList features={features}/></p>
        <p className="POPOSDetails-geo"> <SimpleMap lat={geo.lat} lng={geo.lon} /></p>
       
      </div>
    </div>
  )
}

export default POPOSDetails