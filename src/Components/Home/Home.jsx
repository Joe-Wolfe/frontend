import { decodeToken } from '../../helpers/DecodeToken'
import { useState } from 'react'
import './Home.css'

function Home(user) {

    const token = localStorage.getItem('token')
    const username = user && token ? decodeToken().username : null

    return (
        <div className='home'>
            <h1 className='home-title'>Welcome to Jobly</h1>
            <p className='home-body'>The place to find jobs and companies looking for new employees!</p>
            {username ? <p className='home-body'>Welcome back, {username}</p> : <p className='home-body'>Sign in to get started</p>}
        </div>
    )
}

export default Home