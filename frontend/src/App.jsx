import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { ListIndicators } from './components/ListIndicators';

import { MexicoMap } from './components/MexicoMap'
import { BigNumber } from './components/BigNumber';
import { PeriodSelector } from './components/PeriodSelector';
import { AppContext } from './context/AppProvider';

function App() {
  const context = useContext(AppContext);

  return (
    <main className='w-screen h-screen' style={{ cursor: context.isLoading ? "wait" : "auto" }}>
      <header className='header-title'>
        <h1>Map application</h1>
      </header>
      <div>
        <ListIndicators />
        <PeriodSelector />
      </div>

      <section className='section-app'>
        <MexicoMap />
        <BigNumber />
      </section>
    </main>
  )
}

export default App
