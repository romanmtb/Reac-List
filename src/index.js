import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

render(<App/>, document.getElementById('root'))


fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => console.log(data));