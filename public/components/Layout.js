import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../../src/styles/main.scss'

export default function Layout({children}) {
  return (
  <>
  
  {children}
  <Footer/>
  </>
  
    )
}
