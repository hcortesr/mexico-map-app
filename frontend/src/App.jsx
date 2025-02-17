import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { ListIndicators } from './components/ListIndicators';

import { MexicoMap } from './components/MexicoMap'
import { BigNumber } from './components/BigNumber';
import { PeriodSelector } from './components/PeriodSelector';
import { AppContext } from './context/AppProvider';

export function NumberFormatter(num) {

  let t = num.toString();
  const a = t.split(".");

  let b = a[0].split("");
  b.reverse();
  let arrayRes = []

  for (let i = 0; i < b.length; i++) {

    if (i != 0 && i % 3 == 0) {
      arrayRes.push(",");
    }
    arrayRes.push(b[i]);
  }
  arrayRes.reverse();

  if (a[1]) {
    arrayRes = [...arrayRes, ".", a[1]];
  }
  return arrayRes.join("");
}

function App() {
  const context = useContext(AppContext);

  return (
    <main className='w-screen h-screen' style={{ cursor: context.isLoading ? "wait" : "auto" }}>
      <header className='text-center text-2x p-6'>
        <h1 className='text-black font-bold'>Map application</h1>
      </header>
      <div className='flex justify-evenly md:blockg'>
        <ListIndicators className="rounded-md border-2 p-1 md:ml-10 border-black text-lg" />
        <PeriodSelector className="rounded-md border-2 p-1 md:ml-3 border-black text-lg" />
      </div>

      <section className='relative'>
        <MexicoMap />
        <BigNumber />
      </section>
    </main>
  )
}

export default App
