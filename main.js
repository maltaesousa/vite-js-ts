import './style.css'
import viteLogo from '/vite.svg'
import { setupCounterJS } from './counter.js'
import { setupCounterTS } from './counter.ts'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter-js" type="button"></button>
    </div>
    <div class="card">
      <button id="counter-ts" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounterJS(document.querySelector('#counter-js'))
setupCounterTS(document.querySelector('#counter-ts'))
