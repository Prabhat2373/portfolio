import React from 'react'

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="grid grid-cols-6 border border-border-main ">
                    <div className='col-span-1 items-center self-center'>
                        <h1 className='w-28 text-text-main '>dev-prabhat</h1>
                    </div>
                    <div className='col-span-4'>
                        <ul className='flex'>
                            <li className='flex justify-center items-center cursor-pointer text-white px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow'><a href="">_hello</a></li>
                            <li className='flex justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow'><a href="">_about-me</a></li>
                            <li className='flex justify-center items-center cursor-pointer text-text-main px-6 border border-border-main py-4 border-b-2 border-b-bg-main hover:border-b-yellow'><a href="">_projects</a></li>
                        </ul>
                    </div>
                    <div className='py-4 px-6 border border-border-main'>
                        <a className='text-text-main  ' href="">contact</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar