import React, {lazy, Suspense} from 'react'
const MissingPeopleList = lazy(() => import('../components/MissingPeopleList'))
const ComponentWithGeolocation = lazy(() => import('../components/Geolocation'))

function HomePage(){

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentWithGeolocation />
                <div className="sm:grid mt-6 w-full max-w-6xl relative mx-auto mb-24 sm:grid-columns-2 sm:grid-gap-8 lg:grid-columns-3">
                    <MissingPeopleList />
                </div>
             </Suspense>
        </>
    )
}

export default HomePage