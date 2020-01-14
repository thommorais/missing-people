import React from 'react'


function Picture({className, url}){
    return (
    <figure className={`relative m-0 p-0 overflow-hidden ${className}`}>
        <img width="380" height="380" src={url} alt="thom morais" className="bg-gray min-w-full" />
    </figure>
    )
}

export default Picture