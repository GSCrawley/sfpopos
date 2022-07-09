import POPOSSpace from './POPOSSpace';
import './POPOSList.css';



function POPOSList() {
    return (
        <div className="container">
        <div className="POPOSList">
            <POPOSSpace 
            name="50 California Street"
            address="50 California St."
            image="50-california-st.jpg"/>
            <POPOSSpace 
            name="100 Pine"
            address="100 Pine St."
            image="100-pine.jpg"/>
            <POPOSSpace 
            name="Garden Terrace at 150 California Street"
            address="150 California St."
            image="garden-terrace-at-150-california.jpg"/>
            <POPOSSpace 
            name="343 Sansome Roof Garden"
            address="343 Sansome St."
            image="343-sansome-roof-garden.jpg"/>
            <POPOSSpace
            name="525 Market Street Plaza"
            address="525 Market St."
            image="525-market-street-plaza.jpg"/>
            <POPOSSpace
            name="Citigroup Center"
            address="1 Sansome St."
            image="citigroup-center.jpg"/>
        </div>
        </div>
    )
}

export default POPOSList

