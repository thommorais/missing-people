import React from 'react'
import daysjs from 'dayjs'

function Description({description}){

    if(!description){
        return null
    }

    const birthdate = daysjs.unix(description.age)
    const now = daysjs()
    const age = now.diff(birthdate, 'year')

    return <>
        <div className="mt-4">
            <ul>
                <li className="text-sm">
                    <strong className="font-semibold">Age:</strong>
                    <span>{` ${age}`} </span>
                </li>
                <li className="text-sm">
                    <strong className="font-semibold">Height:</strong>
                        <span> {description.height}</span>
                </li>
                <li className="text-sm">
                    <strong className="font-semibold">Gender:</strong>
                        <span> {description.gender}</span>
                </li>
            </ul>
        </div>
    </>
}

export default Description