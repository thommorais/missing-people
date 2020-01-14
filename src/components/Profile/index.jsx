import React, {useEffect, useState} from 'react'
import dayjs from 'dayjs'
import Description from './Description'
import ProfileHeader from './ProfileHeader'
import CTAs from './CTAs'
import Picture from './Picture'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMissingPeople } from '../../store/ducks/people/thunks'



function Profile({id}){
    const [person, setPerson] = useState({})
    const {people, loaded} = useSelector(({missingPeople}) => missingPeople)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!loaded){
            dispatch(fetchMissingPeople())
        }
    }, [dispatch, loaded])

    useEffect(() => {
        const person = people.find(person => person.id === id)
        person && setPerson(person)
    }, [people, id])

    if(!loaded || !person.id){
        return null
    }

    return (
        <>
            <header className="flex items-center flex-wrap">
                <Picture className="rounded-lg sm:w-full md:w-1/2" url={person.description.picture} />
                <div className="p-6 pb-0 m:w-full md:w-1/2">
                    <ProfileHeader name={person.fullName} missingDate={person.dateOfMissing} address={person.address} />
                    <Description description={person.description} />
                    <CTAs className="p-0 mt-4 justify-start " />
                </div>
            </header>
            <div className="leading-loose py-6 px-3">
                <strong className="mb-4">Circumstances of Disappearance:</strong>
                <p className="text-sm mb-4 leading-relaxed">
                    {person.description.description}
                </p>
                <ul className="mb-4">
                    <li><strong>Age at disappearance:</strong> 13</li>
                    <li><strong>Missing Since:</strong> {dayjs.unix(person.dateOfMissing).format('YYYY-MM-DD')}</li>
                    <li><strong>Missing from:</strong> {person.address}</li>
                    <li><strong>Reference No:</strong> 20-000145</li>
                </ul>
            </div>

        </>
    )
}

export default Profile