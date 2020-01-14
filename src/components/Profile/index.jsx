import React from 'react'
import Description from './Description'
import ProfileHeader from './ProfileHeader'
import CTAs from './CTAs'
import Picture from './Picture'


function Profile(){
    return (
        <>
            <header className="flex items-center">
                <Picture className="rounded-lg w-1/2" />
                <div className="p-6 pb-0 w-1/2">
                    <ProfileHeader />
                    <Description />
                    <CTAs className="p-0 mt-4 justify-start " />
                </div>
            </header>
            <div className="w-1/2 leading-loose py-6 px-3">
                <strong className="mb-4">Circumstances of Disappearance:</strong>
                <p className="text-sm mb-4 leading-relaxed">
                    Missing Reference – 3801109/20 He was last on WELLESLEY ROAD, CROYDON having ran away instead of going to school. He is considered vulnerable due to learning needs. He is from the NEWHAM area with links to HACKNEY and DAGENHAM Child
                </p>
                <ul className="mb-4">
                    <li><strong>Age at disappearance:</strong> 13</li>
                    <li><strong>Missing Since:</strong> 11-Jan-2020</li>
                    <li><strong>Missing from:</strong> Chelmsford, Essex</li>
                    <li><strong>Reference No:</strong> 20-000145</li>
                </ul>
            </div>

        </>
    )
}

export default Profile