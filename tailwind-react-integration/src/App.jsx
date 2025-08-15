import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile' // ✅ Import your styled component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Vite Starter Section */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Tailwind Test Section */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-blue-600">
          Tailwind CSS is working! 🎉
        </h2>
      </div>

      {/* ✅ User Profile Component */}
      <div className="mt-10">
        <UserProfile />
      </div>
    </>
  )
}

export default App
