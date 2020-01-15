import React from 'react'
import Description from '../Profile/Description'
import ProfileHeader from '../Profile/ProfileHeader'
import Picture from '../Profile/Picture'

function MissingCard({person}){
    return (
        <article className="missing-card bg-white p-0 overflow-hidden hover:shadow-lg mb-4 sm:mb-0">
            <Picture url={person.description.picture} />
            <div className="p-6 pb-0">
                <ProfileHeader name={person.fullName} missingDate={person.dateOfMissing} address={person.address} />
                <Description description={person.description} />
            </div>
            <hr className="border-b-1 border-gray-200 my-4 mx-4" />
            <div className="px-6 mb-4 flex justify-center items-center">
                <button className="btn-indigo" type="button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#fff" fill-opacity="0.54"/>
                    </svg>
                    View profile
                </button>
            </div>
        </article>
    )
}

export default MissingCard