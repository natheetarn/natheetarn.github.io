import React from 'react'

const Skill = (props) => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#111111] py-4 h-[150px] transition ease-in-out hover:scale-110'>
        <img className = "max-h-[64px] mb-2" src={props.logo} alt={props.title} />
        <p className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]'> {props.title}</p>
    </div>
  )
}

export default Skill