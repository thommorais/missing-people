import React from 'react'
import Profile from '../components/Profile'
import { useParams } from 'react-router-dom'

function ProfilePage(){
    let { id } = useParams()

    return (
        <section className="w-full max-w-2xl mx-auto my-12">
          <Profile id={id} />
        </section>
    )
}

export default ProfilePage