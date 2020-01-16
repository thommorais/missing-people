import React, {useRef, useCallback} from 'react'
import {
  withRouter
} from 'react-router-dom'
import throttle from 'lodash/throttle'
import { useDispatch } from 'react-redux'
import {setSearch} from '../../store/ducks/people/thunks'

function Search({history}){

  const dispatch = useDispatch()

  const throttled = useRef(throttle(newValue => {
      dispatch(setSearch(newValue))
  }, 360))

  const onChange = useCallback(value => throttled.current(value.target.value),[])

    return (
        <div className={`flex flex-grow pt-8 w-full m-auto max-w-6xl ${history.location.pathname === '/' ? 'active' : 'inactive'}`}>
            <div className="w-1/2">
                <div className="inset-y-0 left-0 flex items-center relative ">
                    <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4 absolute ml-4" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                    <input onChange={onChange} id="docsearch" disabled={history.location.pathname !== '/'} className="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input outline-none" type="text" placeholder="Search for names or locations" autoComplete="off" spellCheck="false" dir="auto" />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Search)