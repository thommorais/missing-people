import React, {useEffect, useState, lazy, Suspense} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPeopleForCountry } from '../../store/ducks/people/thunks'

const MissingCard = lazy(() => import('../MissingCard'))

function MissingPeopleList(){

    const [data, setData] = useState([])
    const {people, search, loaded, failSearch} = useSelector(({ missingPeople }) => missingPeople)
    const {country} = useSelector(({location}) => location)
    const dispatch = useDispatch()

    useEffect(() => {
        setData(search.length ? search : people)
    }, [people, search])

    useEffect(() => {
        if(!loaded){
            dispatch(getPeopleForCountry(country))
        }
    }, [country, dispatch, loaded])

    if(failSearch){
        return (
            <div className="not-found">
                <h1 className="text-2xl text-gray-700 mb-2">No results found</h1>
                <p className="text-gray-500">
                    It seems we can’t find any results based on your search.
                </p>
            </div>
        )
    }

    if(!loaded){
        return (
            [...Array(6).keys()].map(e => (
                <article  className="loading-card" key={e} />
            ))
        )
    }

    return (
            data.map(({id, ...data}) => (
                <Suspense key={id} fallback={<article className="loading-card" />}>
                    <Link to={`profile/${id}`} >
                        <MissingCard person={{...data, id}} />
                    </Link>
                 </Suspense>
            ))
    )
}

export default React.memo(MissingPeopleList)