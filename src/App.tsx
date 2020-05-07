import React, { useState } from 'react'
import logo from './assets/logo.png'
import Game from './Game';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, ScreenSize } from './global';
import { theme } from './theme';

import './App.css'

const destroy = () => window.location.reload()

interface PropsType {
  initialize: boolean
}

export default function App () {
  const [initialize, setInitialize] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {/* !not for auto load game */}
        { !initialize 
        ? <><Game initialize={true}/></>
        : <>
            <img src={logo} className="App-logo" alt="logo" />
            <div onClick={() => setInitialize(true)} className="flex">
              <a href="#1" className="bttn">Initialize</a>
            </div>
          </>
        }
      </header>
    </div>
  );
}
