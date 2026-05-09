import { Section } from 'lucide-react'
import React from 'react'

const About = () => {

  const downloadResume = () => { 
    // TODO: Add resume download functionality
   }

  return (
    <main className='flex flex-col min-h-screen space-y-10 md:mt-10'>
      <section id="hero" className='mt-10'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='mt-10 gap-2 flex justify-between'>
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white'>Hi, I'm Raahim 👋</h1>
              <p className='text-white mt-5 text-xl'>Undergrad AI Engineering Enthusiast focusing on AI Research and Development.</p>

              <div className="" id="aboutInfo">
                <p className="font-bold text-white mt-6 text-xl">About Me</p>
                <p className='text-white mt-5 text-lg'>I am an Undergrad Data Science student at <b>NED University of Engineering and Technology</b> at the Department of Computer Science and Information Technology (CSIT).</p>
              </div>
            </div>
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-75 h-68.5 border">
              <img src="/public/Raahim.jpeg" alt="My Profile Image" />
            </span>
          </div>

          <button onClick={downloadResume} className="text-white p-5 bg-gray-900 rounded-2xl text-xl font-sans hover:bg-blue-900 transition-all">Download Resume</button>
        </div>
      </section>
    </main>
  )
}

export default About