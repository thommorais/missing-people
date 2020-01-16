import { Creators as people } from './index'
import {getLocation as getAddress} from '../../../services'

const {
  get,
  loading,
} = people


export function getLocation(lat, long) {
  return async (dispatch) => {
    dispatch(loading())
    const address = await getAddress(lat, long).then(e => e)
    const latLong = {...address.results[0].components}
    localStorage.setItem('address', JSON.stringify(address.results[0].components));
    dispatch(get(latLong))
  }
}
