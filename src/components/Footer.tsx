import React from 'react'
import TwitterIcon from './icons/TwitterIcon'
import FacebookIcon from './icons/FacebookIcon'
import GitHubIcon from './icons/GitHubIcon'

const Footer = () => {
    return (
        <>
            <footer className="hero-footer border border-border-main h-[56px] flex justify-between text-text-main absolute bottom-0 w-full">
                <div className="flex items-center ">
                    <div className='border-r border-border-main px-6 py-4'>
                        find me in:
                    </div>
                    <div className='border-r border-border-main px-6 py-4'>
                        <TwitterIcon />
                    </div>
                    <div className='border-r border-border-main px-6 py-4'>
                        <FacebookIcon />
                    </div>
                </div>
                <div className="flex items-center border-l border-border-main px-6 py-4">
                    <div className='pr-2'>
                        @prabhat2373
                    </div>
                    <div> <GitHubIcon /></div>
                </div>
            </footer>
        </>
    )
}

export default Footer