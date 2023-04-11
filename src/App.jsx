import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { createContext } from 'react';


export const FeaturedJobsContext = createContext([]);

function App() {
  const [featuredJobsData, setFeaturedJobsData] = useState([]);

  useEffect(() => {
    fetch('featuredJobs.json')
      .then(res => res.json())
      .then(data => setFeaturedJobsData(data))
  }, [])

  return (
    <div className="App">
      <FeaturedJobsContext.Provider value={featuredJobsData}>
        <Header></Header>
        <Outlet ></Outlet>
      </FeaturedJobsContext.Provider>
    </div>
  )
}

export default App
