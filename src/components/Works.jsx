import React from 'react'
import Project from './Project'
import {projects} from '../constants'
const Works = () => {
  return (
    <div name="works" className="w-full min-h-screen bg-[#111111]">
      <div className = "max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full space-y-4 gap-4 items-center">
        <h1 className="mb-5 font-extrabold text-5xl sm:text-7xl text-transparent  bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]">
          Works
        </h1>
        {projects.map((project, index) => {
          return (
            <Project key = {project.id} title = {project.title} poster = {project.poster} 
            desc = {project.desc} index = {index} vid = {project.vid}
            link = {project.link}/>
          )
        })}
        <div className='h-[300px]'>
          
        </div>
      </div>
    </div>
  )
}

export default Works