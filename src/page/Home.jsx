import React, {lazy, Suspense} from 'react'
const MissingPeopleList = lazy(() => import('../components/MissingPeopleList'))
const Search = lazy(() => import('../components/Search'))

function HomePage(){

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex items-center justify-between py-6 px-3 max-w-6xl m-auto">
                <Search />
            </div>
            <div className="sm:grid mt-6 w-full max-w-6xl relative mx-auto sm:grid-columns-2 sm:grid-gap-8 lg:grid-columns-3">
                <MissingPeopleList />
            </div>
        </Suspense>
    )
}

export default HomePage