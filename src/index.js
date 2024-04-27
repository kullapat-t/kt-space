import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import './assets/styles/main.scss'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const container =  document.getElementById('root')
const root = createRoot(container)
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin + '/kt-space'}
  >
    <App />
  </Auth0Provider>
)