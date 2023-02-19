import React from 'react'
import TwitterIcon from '../../components/icons/TwitterIcon'
import FacebookIcon from '../../components/icons/FacebookIcon'
import GitHubIcon from '../../components/icons/GitHubIcon'
import SnakeGame from '../../components/SnakeGame'


const Hero = () => {
  return (
    <>
      <section className="hero h-[90vh] w-full " id="hero">
        <div className="main grid grid-cols-2 h-full">
          <div className='flex justify-end'>
            <div className='flex justify-center items-baseline flex-col'>
              <h3 className='font-medium text-font-secondary text-lg'>
                Hi all. I am
              </h3>
              <h1 className='font-medium text-font-secondary text-6xl '>Prabhat Tambe</h1>
              <h1 className='text-hero-blue font-semibold text-3xl'>{'>'} Front-end developer</h1>
              <div className='pt-20'>
                <h2 className='text-text-main pb-2'>// complete the game to continue</h2>
                <h2 className='text-text-main pb-2'>// you can also see it on my Github page</h2>
                <h2 className='text-white'><span className='text-hero-blue'>const</span> <span className='text-cyan-green'>githubLink</span> = <a href='https://github.com/Prabhat2373/' target='_blank' className='text-teal'>“https://github.com/Prabhat2373/”</a></h2>
              </div>
            </div>

          </div>
          <div className='flex w-full justify-center items-center'>

            <SnakeGame />
          </div>
        </div>

      </section>
    </>
  )
}

export default Hero