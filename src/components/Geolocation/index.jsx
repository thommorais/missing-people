import React, {useEffect, useState} from 'react'
import useGeolocation from 'react-hook-geolocation'

const api = (lat, long) => `https://geocode.xyz/${lat},${long}?json=1`

const ComponentWithGeolocation = () => {

  const [address, setAddress] = useState({})
  const geolocation = useGeolocation()

  useEffect(() => {
    console.log(geolocation)
    if(geolocation.latitude){
      fetch(api(geolocation.latitude, geolocation.longitude))
      .then(response => response.json())
      .then(address => setAddress(address))
    }
  }, [geolocation])

  return address.region
    ? (
      <div className="flex flex-wrap mt-6 w-full max-w-6xl relative mx-auto px-6">
          <h3 className="text-4xl font-light">
              {address.region}
          </h3>
      </div>
    )
    : (
      <div className="flex flex-wrap mt-6 w-full max-w-6xl relative mx-auto px-6">
          <h3 className="text-4xl font-light">
             No geolocation, sorry.
          </h3>
      </div>
    )
}

export default ComponentWithGeolocation