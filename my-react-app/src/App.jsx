import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/header'
import { useEffect } from 'react'
import Card from '../components/card'
import axios from 'axios'

function App() {
  const [username,setUsername]=useState('')
  const [data,setData]=useState('')

  
useEffect(() => {
    axios.get(`https://api.github.com/users/syedubaid11`).then((response) => {
      setData(response.data);
      setUsername(response.data.login)
      console.log(response.data)
    });
  }, []);
  return(
    <>
    <Header/>
    <Card/>



    </>

  )
}

export default App
