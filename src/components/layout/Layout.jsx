import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ScrollToTopButton from '../scrollToTop/ScrollToTopButton.jsx';

function Layout({children}) {
  return (
    <div>
        
        <Navbar/>
        <div className="content">
            {children}
        </div>
        <ScrollToTopButton />
        <Footer/>
    </div>
  )
}

export default Layout