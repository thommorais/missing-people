import React, {useEffect, useState} from 'react'
import useGeolocation from 'react-hook-geolocation'
import { useSelector, useDispatch } from 'react-redux'


import {getLocation} from '../../store/ducks/location/thunks'

const ComponentWithGeolocation = () => {
  const [address, setAddress] = useState({})
  const geolocation = useGeolocation()
  const {locations, loaded} = useSelector(state => state.location)
  const dispatch = useDispatch()

  useEffect(() => {
    if(geolocation.latitude && !loaded){
      dispatch(getLocation(geolocation.latitude, geolocation.longitude))
    }
  }, [geolocation.latitude, loaded])

  useEffect(() => {
    if(locations){
      setAddress(locations)
    }
  }, [locations, loaded])

  return address && address.country
    ? (
      <div className="flex flex-wrap mt-6 w-full max-w-6xl relative mx-auto px-6">
          <h3 className="text-4xl font-light">
              {`${address.city}, ${address.country}`}
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

export default React.memo(ComponentWithGeolocation)