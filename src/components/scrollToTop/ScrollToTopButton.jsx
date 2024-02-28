// import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa'; // You can choose your own scroll-up icon


// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show/hide the scroll-to-top button based on scroll position
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 100) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Scroll to the top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);

//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);

//   return (
//     <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
//       <FaArrowUp />
//     </div>
//   );
// };

// export default ScrollToTopButton;

// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        display: isVisible ? 'block' : 'none',
        fontSize: '24px',
        color: '#007bff', // Change the color as needed
        backgroundColor: '#ffffff', // Change the background color as needed
        border: '1px solid #007bff',
        borderRadius: '50%',
        padding: '10px',
        transition: 'opacity 0.3s, visibility 0.3s',
      }}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
