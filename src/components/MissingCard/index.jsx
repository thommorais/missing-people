import React from 'react'
import Description from '../Profile/Description'
import ProfileHeader from '../Profile/ProfileHeader'
import CTAs from '../Profile/CTAs'
import Picture from '../Profile/Picture'

function MissingCard({person}){
    return (
        <article href="/" className="missing-card bg-white p-0 overflow-hidden hover:shadow-lg">
            <Picture url={person.description.picture} />
            <div className="p-6 pb-0">
                <ProfileHeader name={person.fullName} missingDate={person.dateOfMissing} address={person.address} />
                <Description description={person.description} />
            </div>
            <hr className="border-b-1 border-gray-200 my-4 mx-4" />
            <CTAs className="justify-center pb-6 pt-0"/>
        </article>
    )
}

export default MissingCard