import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonDashFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                LinkedIn  <FaLinkedin size={30} />
                </>    
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                Mail  <HiOutlineMail size={30} />
                </>    
            ),
            href: 'mailto:evanza11s@gmail.com',
        },
        {
            id:3,
            child: (
                <>
                GitHub  <FaGithub size={30} />
                </>    
            ),
            href: 'https://github.com',
        },
        {
            id:4,
            child: (
                <>
                Facebook  <FaFacebook size={30} />
                </>    
            ),
            href: 'https://facebook.com',
        },
        {
            id:5,
            child: (
                <>
                Instagram  <FaInstagram size={30} />
                </>    
            ),
            href: 'https:/instagram.com',
        },
        {
            id:6,
            child: (
                <>
                Resume  <BsFillPersonDashFill size={30} />
                </>    
            ),
            href: 'https://linkedin.com',
            style: 'rounded-br-md'
        },
    ]

  return (
    <div className=' flex flex-col top-[35%] left-0 fixed'>
    <ul>
    {links.map(({id, child, href, style,}) => (
        <li key={id} className= {` flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-300 bg-gray-500 ${style}`} >
        <a className=' flex justify-between items-center w-full text-white' href={href}>
        {child}
        </a>
        </li>
    ))}
        
    </ul>
    </div>
  )
}

export default SocialLinks