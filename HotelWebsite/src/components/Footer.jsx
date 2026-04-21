import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
        <div className="bg-[#F6F9C] flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
        
            <div className="max-w-96">
                <img src={assets.logo} alt="" className='mb-4 h-8 md:h-9 brightness-0' />
                <p className="mt-6 text-sm text-gray-500">
                    Experience the epitome of hospitality at our hotel, where comfort meets elegance. Our dedicated team is committed to providing exceptional service, ensuring your stay is unforgettable. 
                </p>
                <div className="flex items-center gap-2 mt-3">
                    {/* Instagram */}
                    <img src={assets.instagramIcon} alt="instagram-icon" className='w-6' />

                    {/* Facebook */}
                    <img src={assets.facebookIcon} alt="facebook-icon" className='w-6' />

                    {/* Twitter */}
                    <img src={assets.twitterIcon} alt="twitter-icon" className='w-6' /> 

                    {/* LinkedIn */}
                    <img src={assets.linkendinIcon} alt="linkedin-icon" className='w-6' />


                </div>
            </div>

            <div className="font-playfair w-1/2 flex flex-wrap md:flex-nowrap justify-between">
                <div>
                    <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
                    <ul className="mt3 flex flex-col gap-2 text-sm text-gray-500 list-none">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>

                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-5">QUICK LINKS</h3>
                        <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-500 list-none">
                            <li><a href="#" className="hover:underline transition">Home</a></li>
                            <li><a href="#" className="hover:underline transition">Best Sellers</a></li>
                            <li><a href="#" className="hover:underline transition">Offers & Deals</a></li>
                            <li><a href="#" className="hover:underline transition">Contact Us</a></li>
                            <li><a href="#" className="hover:underline transition">FAQs</a></li>
                        </ul>
                    </div>
               </div>


                
                <div>
                    <h2 className="font-playfair font-semibold text-gray-900 mb-5">COMPANY</h2>
                    <div className="mt-3 flex flex-col gap-2 text-sm text-gray-500 list-none">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </div>
                </div>
            </div>

    </div>

        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
            Copyright 2026 © <a href="https://prebuiltui.com">Hotel KevCare</a>. All Right Reserved.
        </p>

    </div>
  )
}

export default Footer
