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
  const [image,setImage]=useState('')
  const [following,setFollowing]=useState('')

  
useEffect(() => {
    axios.get(`https://api.github.com/users/syedubaid11`).then((response) => {
      setData(response.data);
      setUsername(response.data.login)
      setImage(response.data.avatar_url)
      setFollowing(response.data.url.following)

      //
      
      console.log(response.data)
      
      
    });
  }, []);
  return(
    <>
    <Header/>
    <Card cardname={username}
          cardimage={image
          }/>



    </>

  )
}

export default App
