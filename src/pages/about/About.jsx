// import React from 'react'
// import './About.css'
// import { BsDatabase, BsClipboardData} from 'react-icons/bs';
// import { AiOutlineUsergroupAdd} from 'react-icons/ai';
// const About = () => {
//   return (
//     <>
//     <div className='about'>
//         <div className='about_banner'>
//             <p>Home.About</p>
//             <h2>About Us</h2>
//         </div>
//         <div className='about_info'>
//             <div className='left'>
//                 <h3>about myself</h3>
//                 <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
//                 <div className='box_container'>
//                     <div className='box'>
//                         <div className='icon'>
//                             <BsDatabase />
//                         </div>
//                         <h3>$ 2.5M</h3>
//                         <p>Total Donation</p>
//                     </div>
//                     <div className='box'>
//                         <div className='icon'>
//                             <BsClipboardData />
//                         </div>
//                         <h3>1435</h3>
//                         <p>Total Projects</p>
//                     </div>
//                     <div className='box'>
//                         <div className='icon'>
//                             <AiOutlineUsergroupAdd />
//                         </div>
//                         <h3>2965</h3>
//                         <p>Total Volunteers</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='right'>
//                 <div className='container'>
//                     <h3>TOOLS EXPERTNESS</h3>
//                     <div className='contant'>
//                         <h3>After Effects 85%</h3>
//                         <div className='box'>
//                             <div className='fieldAE'></div>
//                         </div>
//                     </div>
//                     <div className='contant'>
//                         <h3>Photoshop 80%</h3>
//                         <div className='box'>
//                             <div className='fieldP'></div>
//                         </div>
//                     </div>
//                     <div className='contant'>
//                         <h3>illustrator 70%</h3>
//                         <div className='box'>
//                             <div className='fieldI'></div>
//                         </div>
//                     </div>
//                     <div className='contant'>
//                         <h3>sketch 90%</h3>
//                         <div className='box'>
//                             <div className='fieldS'></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default About

// AboutUs.js
// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-us-container">
//       <h2 className="about-us-heading">About Us</h2>
//       <p className="about-us-text">
//         Welcome to our e-commerce platform! At XYZ Store, we are passionate
//         about delivering high-quality products and exceptional customer
//         service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//         facilisi. Curabitur tincidunt efficitur ullamcorper.
//       </p>
//       <p className="about-us-text">
//         Our mission is to provide a seamless shopping experience for our
//         customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Nulla facilisi. Curabitur tincidunt efficitur ullamcorper.
//       </p>
//     </div>
//   );
// };

// export default About;

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Images & Text */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700">
            We are a passionate team of developers, designers, and innovators.
            Our mission is to create exceptional digital experiences that
            transform businesses.
          </p>
          <img
            src="../../images/whoweare.jpg" // Replace with your actual image
            alt="Our Team"
            className="mt-8 rounded-full h-40 w-40 mx-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Features</h2>
          <div className="flex justify-center space-x-8">
            {/* Feature 1 */}
            <div>
              <img
                src="../../images/Feature1.jpg" // Replace with your feature icon
                alt="Feature 1"
                className="h-12 w-12 mx-auto"
              />
              <p className="text-gray-700 mt-2">Fast & Reliable Services</p>
            </div>
            {/* Feature 2 */}
            <div>
              <img
                src="../../images/Feat2.jpg" // Replace with your feature icon
                alt="Feature 2"
                className="h-12 w-12 mx-auto"
              />
              <p className="text-gray-700 mt-2">24/7 Customer Support</p>
            </div>
            {/* Add more features as needed */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
          <div className="flex justify-center space-x-8">
            {/* Testimonial 1 */}
            <div>
              <img
                src="/images/testimonial.jpg" // Replace with client photo
                alt="Client 1"
                className="rounded-full h-20 w-20 mx-auto"
              />
              <p className="text-gray-700 mt-2">
                "Amazing service! They exceeded our expectations."
              </p>
              <p className="text-blue-500 font-semibold">- Jane Doe</p>
            </div>
            {/* Testimonial 2 */}
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;