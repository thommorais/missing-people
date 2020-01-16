import React from 'react'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from '../Header'
import HomePage from '../../page/Home'
import ProfilePage from '../../page/Profile'

import store from '../../store'

function App(){
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <div className="px-6 relative z-10">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/profile/:id" exact component={ProfilePage} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    )

}
export default App
