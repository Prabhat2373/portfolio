import React from 'react'
import TwitterIcon from './icons/TwitterIcon'
import FacebookIcon from './icons/FacebookIcon'
import GitHubIcon from './icons/GitHubIcon'
import LinkedInIcon from './icons/LinkedInIcon'

const Footer = () => {
    return (
        <>
            <footer className="hero-footer bg-bg-main border border-border-main h-[56px] flex justify-between text-text-main absolute bottom-0 w-full">
                <div className="flex items-center ">
                    <div className='border-r border-border-main px-6 py-4' style={{
                        padding: ' 12px 20px 12px 60px'
                    }}>
                        find me in:
                    </div>
                    <div className='border-r border-border-main px-6 py-4'>
                        <TwitterIcon />
                    </div>
                    <div className='border-r border-border-main px-6 py-4'>
                        <FacebookIcon />
                    </div>
                    <div className='border-r border-border-main px-6 py-4'>
                        <LinkedInIcon />
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