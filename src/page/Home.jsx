import React, {useEffect, useState} from 'react'
import MissingCard from '../components/MissingCard'
import {
  Link
} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { fetchMissingPeople } from '../store/ducks/people/thunks'


function HomePage(){

    const [data, setData] = useState([])

    const {people, search, loaded} = useSelector(({missingPeople}) => missingPeople)
    const dispatch = useDispatch()

    useEffect(() => dispatch(fetchMissingPeople()), [])

    useEffect(() => {
        setData(!search.length ? people : search)
    }, [people, search])


    return (
        <>
            <div className="flex flex-wrap mt-6 w-full max-w-6xl relative mx-auto sm:px-6 md:px-12">
                <h3 className="text-4xl font-light">Porto Alegre, RS, Brazil</h3>
            </div>
            <div className="sm:grid mt-6 w-full max-w-6xl relative mx-auto mb-24 md:px-6 sm:grid-columns-2 sm:grid-gap-8 lg:grid-columns-3">

                {
                    !loaded && [...Array(6).keys()].map(e => (
                        <article href="/" className="loading-card" key={e} />
                    ))
                }

                {
                    loaded && data.map(({name, lastName, id, ...data}) => (
                        <Link to={`profile/${id}`} key={lastName} >
                            <MissingCard person={{...data, name, lastName, id}} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default HomePage