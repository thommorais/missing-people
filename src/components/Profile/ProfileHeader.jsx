import React from 'react'
import dayjs from 'dayjs'


function ProfileHeader({name, missingDate, address}){

    const now = dayjs()
    const missingDays = dayjs(missingDate)
    const days = now.diff(missingDays, 'days')

    return (
        <header>
            <h4 className="m-0 text-orange-600 text-sm">{days} days missing</h4>
            <h1 className="m-0 font-semibold text-2xl leading-tight truncate ">
                {name}
            </h1>
            <h4 className="mt-0 text-gray-500 text-sm">{address}</h4>
        </header>
    )
}

export default ProfileHeader