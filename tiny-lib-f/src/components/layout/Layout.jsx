import React from 'react';
import FTANavbar from '../Navbar';

const Layout = ({children}) => {
  return (
    <div>
        <FTANavbar />
        {children}
    </div>
  )
}

export default Layout