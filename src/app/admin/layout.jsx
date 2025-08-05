import React from 'react'
import Sidebar from '../components/Sidebar'
import AdminHeader from '../components/AdminHeader'


const AdminLayout = ({children}) => {
  return (
    <div className='flex justify-center items-start' >
<Sidebar/>
<div className=""></div>
{children}
<AdminHeader/>
    </div>
  )
}

export default AdminLayout