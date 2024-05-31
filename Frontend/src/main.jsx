import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Theme } from '@radix-ui/themes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Theme
      appearance='dark'
      accentColor='violet'
      grayColor='mauve'
      panelBackground='translucent'
      radius='small'
      
    > */}

      <App />
    {/* </Theme> */}

  </BrowserRouter>,
)
