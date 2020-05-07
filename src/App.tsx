import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import logo from './assets/logo.png'

import Game from './Game';

import { GlobalStyles, StyledApp } from './global';
import { theme } from './theme';

// const destroy = () => window.location.reload()

// Initial menu before app loads
// Currently disabled, this section could be used to create/load save data
// or to have settings. It can also control when the game loads and renders

export default function App () {
  const [initialize, setInitialize] = useState(false)

  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        {/* !initialize makes the game load before the title menu */}
        { !initialize 
        ? <Game initialize={initialize}/>
        : <>
            <img src={logo} className="App-logo" alt="logo" />
            <div onClick={() => setInitialize(true)} className="flex">
              <a href="#1" className="bttn">Initialize</a>
            </div>
          </>
        }
        </ThemeProvider>

    </StyledApp>
  );
}
