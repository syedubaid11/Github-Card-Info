import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/header'
import { useEffect } from 'react'
import Card from '../components/card'
import axios from 'axios'
import Searchbar from '../components/searchbar'

function App() {
  const [username,setUsername]=useState('')
  const [data,setData]=useState('')
  const [image,setImage]=useState('')
  const [following,setFollowing]=useState('')
  const [followers,setFollowers]=useState('')

  
useEffect(() => {
    axios.get(`https://api.github.com/users/syedubaid11`).then((response) => {
      setData(response.data);
      setUsername(response.data.login)
      setImage(response.data.avatar_url)
      setFollowing(response.data.following)
      setFollowers(response.data.followers)

      //
      
      console.log(response.data)
      console.log(response.data.following)
      console.log(response.data.followers)
      
    });
  }, []);
  return(
    <>
    <Header/>
    <Card cardname={username}
          cardimage={image}
          cardfollowing={following}
          cardfollowers={followers}
          />
    <Searchbar/>




    </>

  )
}

export default App
