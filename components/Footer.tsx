import Link from 'next/link';
import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-blue-600 to-blue-900 text-white py-10'>
            <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
           
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold tracking-wider'>Contact Information</h1>
                    <div className='flex items-center gap-3'>
                        <BsTelephone size={20} />
                        <Link href="tel:+96176667359" className='hover:text-blue-200 transition-colors'>
                            +961 76667359
                        </Link>
                    </div>
                    <div className='flex items-center gap-3'>
                        <CiMail size={20} />
                        <Link href="mailto:khaledfrayji7@gmail.com" className='hover:text-blue-200 transition-colors'>
                            khaledfrayji7@gmail.com
                        </Link>
                    </div>
                    <div className='flex items-center gap-3'>
                        <CiLocationOn size={20} />
                        <p>Beirut, Lebanon</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold tracking-wider'>Follow Me</h1>
                    <div className='flex gap-4'>
                        <Link 
                            href="https://www.instagram.com/your_instagram_username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='hover:text-blue-200 transition-colors'
                        >
                            <CiInstagram size={30} />
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/your_linkedin_username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='hover:text-blue-200 transition-colors'
                        >
                            <CiLinkedin size={30} />
                        </Link>
                        <Link 
                            href="https://www.facebook.com/your_facebook_username" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='hover:text-blue-200 transition-colors'
                        >
                            <CiFacebook size={30}/>
                        </Link>
                    </div>
                </div>

             
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold tracking-wider'>Useful Links</h1>
                    <nav className='flex flex-col gap-3'>
                        <Link href="/about" className='hover:text-blue-200 transition-colors'>
                            About
                        </Link>
                        <Link href="/experience" className='hover:text-blue-200 transition-colors'>
                            Experience
                        </Link>
                        <Link href="/projects" className='hover:text-blue-200 transition-colors'>
                            Projects
                        </Link>
                        <Link href="\Khaled_Frayji_CV.pdf" className='hover:text-blue-200 transition-colors'>
                            CV
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer