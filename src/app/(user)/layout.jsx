import React from 'react'
import Header from '../components/UserHeader'
import Footer from '../components/Footer'

const UserLayout = ({children}) => {
  return (
    <div className='flex flex-col w-full h-screen justify-between'>
      <Header/>
        {children}
        <Footer/>
     
</div>
  )
}

export default UserLayout