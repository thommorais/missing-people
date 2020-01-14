import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


import Header from '../Header'
import HomePage from '../../page/Home'
import ProfilePage from '../../page/Profile'

function App(){
    return (
        <Router>
            <Header />
            <div className="px-6">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/profile/:id"  component={ProfilePage} />
                </Switch>
            </div>
        </Router>
    )

}
export default App
