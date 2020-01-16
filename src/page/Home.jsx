import React, {lazy, Suspense} from 'react'
const MissingPeopleList = lazy(() => import('../components/MissingPeopleList'))
const Search = lazy(() => import('../components/Search'))

function HomePage(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Search />
            <div className="sm:grid mt-6 w-full max-w-6xl relative mx-auto mb-24 sm:grid-columns-2 sm:grid-gap-8 lg:grid-columns-3">
                <MissingPeopleList />
            </div>
        </Suspense>
    )
}

export default HomePage