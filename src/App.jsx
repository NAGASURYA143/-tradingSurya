import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
    <h1>Trader SURYA</h1>
    <p>Profitable Trader | Market Analyst | Risk Strategist</p>
  </header>

  <section class="about">
    <h2>About SURYA</h2>
    <p>With 1 year of experience in the FOREX and CRYPTO markets, I has consistently delivered strong returns through disciplined risk management.</p>
  </section>

  <section class="stats">
    <h2>Performance Stats</h2>
    <div class="cards">
      <div class="card">
        <h3>APPS USED</h3>
        <p>META TRADER 3, EXNESS, TRADING VIEW</p>
      </div>
      <div class="card">
        <h3>Win Rate</h3>
        <p>74%</p>
      </div>
      <div class="card">
        <h3>Avg. Monthly Profit</h3>
        <p>$600-1000</p>
      </div>
      <div class="card">
        <h3>Drawdown</h3>
        <p>8.3%</p>
      </div>
    </div>
  </section>


  <section class="contact">
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 Trader SURYA </p>
  </footer>

    </>
  )
}

export default App
