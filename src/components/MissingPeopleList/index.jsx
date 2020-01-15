import React, {useEffect, useState, lazy, Suspense} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMissingPeople } from '../../store/ducks/people/thunks'

const MissingCard = lazy(() => import('../MissingCard'))


function MissingPeopleList(){

    const [data, setData] = useState([])

    const {people, search, loaded} = useSelector(({missingPeople}) => missingPeople)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMissingPeople())
    }, [])

    useEffect(() => {
        setData(!search.length ? people : search)
    }, [people, search])

    return (

        <>
            {
                !loaded && [...Array(6).keys()].map(e => (
                    <article  className="loading-card" key={e} />
                ))
            }

            {loaded && data.map(({id, ...data}) => (
                <Suspense fallback={<article className="loading-card" />}>
                    <Link to={`profile/${id}`} key={id} >
                        <MissingCard person={{...data, id}} />
                    </Link>
                 </Suspense>
            ))}
        </>
    )
}

export default MissingPeopleList