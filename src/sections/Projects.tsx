import React from 'react'
import { useState } from 'react'
import { myProjects } from '../constants'

type Props = {}

const Projects = (props: Props) => {
  const upRightArrowIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdmUtdXAtcmlnaHQiPjxwYXRoIGQ9Ik0xMyA1SDE5VjExIi8+PHBhdGggZD0iTTE5IDVMNSAxOSIvPjwvc3ZnPg==`
  const rightArrowIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0Ij48cGF0aCBkPSJNNSAxMmgxNCIvPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciLz48L3N2Zz4=`
  const leftArrowIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWxlZnQiPjxwYXRoIGQ9Im0xMiAxOS03LTcgNy03Ii8+PHBhdGggZD0iTTE5IDEySDUiLz48L3N2Zz4=`
  
  const projectCount = myProjects.length
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProjects = myProjects[selectedProjectIndex]

  const handleNavigation = (direction:any) => {
    setSelectedProjectIndex((prevIndex) => {
      if(direction === 'previous'){
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
      }
      else{
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    })
  }

  return (
    <section className='c-space my-20'>
      <p className="head-text">My Accomplished Works</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-yellow-400">
          <div className="absolute top-0 right-0 ">
            <img src={myProjects[0].spotlight} alt="spotlight" className='scale-x-[-1] w-full h-32 object-cover rounded-xl' />
          </div>
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={myProjects[0].logoStyle}
          >
            <img src={myProjects[0].logo} alt="logo" 
              className='w-10 h-10 shadow-sm'
            />
          </div>
          
          <div className="flex flex-col gap-5 text-yellow-500 my-5">
            <p className='text-white text-2xl font-semibold animatedText'>{myProjects[0].title}</p>
            <p className="animatedText">{myProjects[0].desc}</p>
            <p className="animatedText">{myProjects[0].subdesc}</p>

            <div className="flex items-center justify-between flex-wrap gap-10">
              <div className="flex items-center gap-6">
                {currentProjects.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              <a href={currentProjects.href} target='_blank' rel='noreferrer'
              className='border-2 border-rose-500 text-rose-500 bg-gray-800 font-semibold flex items-center gap-2 p-1.5 cursor-pointer'
              >
                <p>Check It Out</p>
                <img src={upRightArrowIcon} alt="upRightArrow" />
              </a>
            </div>

            <div className="flex justify-between items-center mt-20">
                <button className="arrow-btn"
                  onClick={() => handleNavigation('previous')}
                >
                  <img src={leftArrowIcon} alt="left-arrow" className='w-5 h-5' />
                </button>
                <button className="arrow-btn"
                  onClick={() => handleNavigation('next')}
                >
                  <img src={rightArrowIcon} alt="right-arrow" className='w-5 h-5' />
                </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects