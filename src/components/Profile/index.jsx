import React, {useEffect, useState} from 'react'
import dayjs from 'dayjs'
import { Redirect } from 'react-router-dom'

import Description from './Description'
import ProfileHeader from './ProfileHeader'
import Loading from '../Loading'

import CTAs from './CTAs'
import Picture from './Picture'
import { useSelector, useDispatch } from 'react-redux'
import { getMissingPeople } from '../../store/ducks/people/thunks'



function Profile({id}){

    const [person, setPerson] = useState({})
    const {people, loaded, loading} = useSelector(({missingPeople}) => missingPeople)
    const dispatch = useDispatch()

    useEffect(() => {
        const person = people.find(person => person.id === id)
        person && setPerson(person)
    }, [people, id])

    useEffect(() => {
        if(!loaded){
            dispatch(getMissingPeople())
        }
    }, [dispatch, loaded])


    if(loading){
        return <Loading />
    }

    if((!loaded && !loading) || !person.id){
        return (
            <div className="flex justify-center items-center">
                <h3 className="text-red-600 text-lg">Not found</h3>
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
                    <CTAs className="p-0 mt-4 justify-start" />
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

export default Profile