import React from 'react';
import { Outlet } from "react-router-dom"
import Header from "@containers/Header"
import "./styles.css"

function Main() {
  return (
    <main className='main'>
      {/* Header */}
      <Header />
      {/* Child pages */}
      <Outlet />
    </main>
  )
}

export default Main