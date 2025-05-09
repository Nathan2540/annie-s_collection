import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/pages/Home'
import CollapsibleExample from './assets/component/Nav'
import Title from './assets/component/shop'
import { Box } from '@chakra-ui/react'
 
import Mentxt from './assets/component/mentxt'
import Women from './assets/pages/women'
import Womentxt from './assets/component/womentxt'
import Unisextxt from './assets/component/unisextxt'
import Unisex from './assets/pages/unisex'
import Mensh from './assets/pages/Mensh'
import Menww from './assets/pages/menww'
import Womenpef from './assets/pages/Womenpef'
import Womenje from './assets/pages/Womenje'
import Men from './assets/pages/Men'
import WSU from './assets/pages/WSU'
import { Route, Routes } from 'react-router-dom'
import Menpef from './assets/pages/Menpef'
import Contactus from './assets/pages/contact'
import Sshop from './assets/pages/Shop'
import Footer from './assets/pages/footer'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box px={{base:"0", lg:"0px"}}>
<CollapsibleExample/>
    {/* <Home/>
    <WSU/>
    <Title/>
    <Mentxt/>
    <Men/>
    <Womentxt/>
    <Women/>
    <Unisextxt/>
    <Unisex/> */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Men" element={<Men/>} />
      <Route path='/Women' element={<Women/>}  />
      <Route path='/Unisex' element={<Unisex/>} />

      <Route path='/Menshoes' element={<Mensh/>}/>
      <Route path='/Menpefumes' element={<Menpef/>} />
      <Route path='/Menwristwatches'  element={<Menww/>}/>

      <Route path='/WoMenje' element={<Womenje/>}/>
      <Route path='/WoMenpefumes' element={<Womenpef/>} />
       <Route path='/Reviews' element={<WSU/>}/>
       <Route path='/Contact' element={<Contactus/>}/>
       <Route path='/Shop' element={<Sshop/>} />
    </Routes>
   
    </Box>
  )
}

export default App
