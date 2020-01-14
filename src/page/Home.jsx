import React from 'react'
import MissingCard from '../components/MissingCard'
import {
  Link
} from "react-router-dom"


const names = [{
  "name": "Ilyssa",
  "lastName": "Nurdin",
  "key": 3
}, {
  "name": "Henry",
  "lastName": "Beaby",
  "key": 6
}, {
  "name": "Hali",
  "lastName": "Wike",
  "key": 9
}, {
  "name": "Nelie",
  "lastName": "Swash",
  "key": 12
}, {
  "name": "Janek",
  "lastName": "Girodier",
  "key": 15
}, {
  "name": "Christel",
  "lastName": "Delahunty",
  "key": 18
}, {
  "name": "Dniren",
  "lastName": "Baillie",
  "key": 21
}, {
  "name": "Annabelle",
  "lastName": "McManus",
  "key": 24
}, {
  "name": "Jayme",
  "lastName": "Welburn",
  "key": 27
}, {
  "name": "Edin",
  "lastName": "Bairstow",
  "key": 30
}, {
  "name": "Tony",
  "lastName": "Kassman",
  "key": 33
}, {
  "name": "Kerk",
  "lastName": "Dillistone",
  "key": 36
}]

function HomePage(){
    return (
        <>
            <div className="flex flex-wrap mt-6 w-full max-w-6xl relative mx-auto px-12">
                <h3 className="text-4xl font-light">Porto Alegre, RS, Brazil</h3>
            </div>
            <div className="grid grid-gap-8 mt-6 w-full max-w-6xl relative mx-auto mb-24 px-6 sm:grid-columns-2 grid-gap-8 lg:grid-columns-3">
                {
                    names.map(({name, lastName, key}) => (
                        <Link to={`profile/${name}-${lastName}`}  key={lastName} >
                            <MissingCard profile={`https://i.pravatar.cc/340?img=${key}`} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default HomePage