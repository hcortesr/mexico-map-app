import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './styles/MexicoMapStyle.css'
import { ListIndicators } from './components/ListIndicators';

import { MexicoMap } from './components/MexicoMap'
import { BigNumber } from './components/BigNumber';
import { PeriodSelector } from './components/PeriodSelector';
import { AppContext } from './context/AppProvider';

function App() {
  const context = useContext(AppContext);

  return (
    <main style={{ cursor: context.isLoading ? "wait" : "auto" }}>
      <header className='header-title'>
        <h1 className='title'>Map application</h1>
      </header>
      <div className='options'>
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
