import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet';
import './styles.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
        <title>Missing People</title>
        <link rel="canonical" href="http://missing-people.io" />
    </Helmet>
    <App />
</>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
