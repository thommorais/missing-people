import React, {useEffect, useState, lazy, Suspense} from 'react'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMissingPeople } from '../store/ducks/people/thunks'
import {getPeople} from '../services'

const MissingCard = lazy(() => import('../components/MissingCard'))
const ComponentWithGeolocation = lazy(() => import('../components/Geolocation'))


function HomePage(){

    const [data, setData] = useState([])

    const {people, search, loaded} = useSelector(({missingPeople}) => missingPeople)
    const dispatch = useDispatch()

    useEffect(() => dispatch(() => fetchMissingPeople()), [])

    useEffect(() => {
        setData(!search.length ? people : search)
    }, [people, search])


    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentWithGeolocation />
            </Suspense>
            <div className="sm:grid mt-6 w-full max-w-6xl relative mx-auto mb-24 sm:grid-columns-2 sm:grid-gap-8 lg:grid-columns-3">

                {
                    !loaded && [...Array(6).keys()].map(e => (
                        <article  className="loading-card" key={e} />
                    ))
                }

                {
                    loaded && data.map(({name, lastName, id, ...data}) => (
                        <Link to={`profile/${id}`} key={lastName} >
                            <Suspense fallback={<article className="loading-card" />}>
                                <MissingCard person={{...data, name, lastName, id}} />
                            </Suspense>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default HomePage