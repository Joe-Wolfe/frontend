import { useState, useEffect } from 'react'
import { getCompanies, getJobs, register, signIn, updateUser } from '../../API'

import { Routes, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import NavBar from '../NavBar/NavBar'

import UserContext from '../../context/userContext'
import Companies from "../Companies/Companies";
import CompanyPage from "../CompanyPage/CompanyPage";
import Jobs from "../Jobs/Jobs";
import RegisterPage from "../RegisterPage/RegisterPage";
import SignInPage from "../SignInPage/SignInPage";
import User from "../User/User";
import Home from "../Home/Home";



import './App.css'

function App() {
  const [companies, setCompanies] = useState([])
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ token })
    }
    getCompanies().then((companies) => {
      setCompanies(companies)
    })
    getJobs().then((jobs) => {
      setJobs(jobs)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (

    <div className='app'>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <NavBar />

          <div className="route-content">
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/companies" element={<Companies companyArr={companies} />} />
              <Route path="/companies/:companyName" element={<CompanyPage />} />
              <Route path="/jobs" element={<Jobs jobArr={jobs} />} />
              <Route path="/Register" element={<RegisterPage register={register} />} />
              <Route path="/SignIn" element={<SignInPage signIn={signIn} />} />
              <Route path="/user/:username" element={<User updateUser={updateUser} />} />
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  )
}

export default App
