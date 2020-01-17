import React, {useEffect} from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import Description from './Description'
import ProfileHeader from './ProfileHeader'
import Loading from '../Loading'

import CTAs from './CTAs'
import Picture from './Picture'
import { useSelector, useDispatch } from 'react-redux'
import { getPeopleForCountry, getPerson, setCurrentPerson} from '../../store/ducks/people/thunks'

function Profile({id}){

    const {people, loaded, loading, person} = useSelector(({missingPeople}) => missingPeople)
    const {country} = useSelector(state => state.location)
    const dispatch = useDispatch()

    useEffect(() => {
        const finded = people.find(person => person.id === id)
        if(finded){
            dispatch(setCurrentPerson(finded))
        }
        if(!finded && !loaded){
            dispatch(getPeopleForCountry(country))
        }
    }, [id, people, country, dispatch, loaded])

    useEffect(() => {
        if(!person){
            dispatch(getPerson())
        }
    }, [dispatch, person])


    if(loading){
        return <Loading />
    }

    if((!loaded && !loading) || !person){
        return (
            <div className="text-center mt-20">
                <h3 className="text-gray-800 text-2xl block">Not found</h3>
                <div className="py-4">
                    <Link to="/" className="text-blue-500 py-2 px-4 text-xs underline">← back to home</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <header className="flex items-center flex-wrap">
                <Picture className="rounded-lg sm:w-full md:w-1/2" url={person.description.picture} />
                <div className="p-6 pb-0 m:w-full md:w-1/2">
                    <ProfileHeader name={`${person.fullName}`} missingDate={person.missing_since} address={person.country} />
                    <Description description={person.description} />
                    <CTAs className="p-0 mt-4 justify-start" data={person} />
                </div>
            </header>
            <div className="leading-loose py-6 px-3">
                <strong className="mb-4">Circumstances of Disappearance:</strong>
                <p className="text-sm mb-4 leading-relaxed">
                    {person.description.description}
                </p>
                <ul className="mb-4">
                    <li><strong>Age at disappearance:</strong> {person.age_when_disappeared}</li>
                    <li><strong>Missing Since:</strong> {dayjs(person.missing_since).format('YYYY.MM.DD')}</li>
                    <li><strong>Missing from:</strong> {person.address}</li>
                    <li><strong>Reference No:</strong> {person.reference_no}</li>
                </ul>
            </div>

        </>
    )
}

export default React.memo(Profile)