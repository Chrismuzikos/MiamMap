import React from 'react'
import { render } from 'react-dom'

/**
 * Containers
 */
import App from 'containers/App'

/**
 *
 * @type {Element} - the root element of the app
 */
const rootEl = document.getElementById('app')


render(<App/>, rootEl)
