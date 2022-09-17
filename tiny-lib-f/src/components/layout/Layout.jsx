import React from 'react';
import FTANavbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({children}) => {
  return (
    <div>
        <FTANavbar />
        {children}
        <Footer/> 
    </div>
  )
}

export default Layout