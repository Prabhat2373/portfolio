import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const path = useLocation().pathname;

    console.log(path)
    return (
        <>
            <header>
                <nav className="grid grid-cols-6 border border-border-main ">
                    <div className='col-span-1 items-center self-center'>
                        <h1 className='text-text-main text-center w-full'>dev-prabhat</h1>
                    </div>
                    <div className='col-span-4'>
                        <ul className='flex'>
                            <li className={`flex justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${path === '/' ? 'border-b-yellow text-white' : ''}`}><Link to="/">_hello</Link></li>
                            <li className={`flex justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${path === '/about' ? 'border-b-yellow text-white' : ''}`}>
                                <Link to="/about">_about-me</Link>
                                </li>
                            <li className={`flex justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow ${path === '/projects' ? 'border-b-yellow text-white' : ''}`}><Link to="/projects">_projects</Link></li>
                        </ul>
                    </div>
                    <div className='py-4 px-6 border border-border-main'>
                        <Link className='text-text-main  ' to="/contact">contact</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar